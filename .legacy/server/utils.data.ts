import fs from 'fs';
import path from 'path';
import {
  SUBCOLLECTIONS_DIR,
  PLATFORM_SUBCOLLECTION_NAME,
  PLATFORM_FEATURE_SUBCOLLECTION_NAME,
  PLATFORM_ACCOUNTS_SUBCOLLECTION_NAME,
  PLATFORM_POLICY_SUBCOLLECTION_NAME,
  FEATURE_SUBCOLLECTION_NAME,
  FEATURE_CATEGORY_SUBCOLLECTION_NAME,
  PLATFORM_RESOURCE_LINKS_SUBCOLLECTION_NAME,
  METADATA_FILE_EXT,
  DOCUMENTS_FILE_EXT,
  MEDIA_FILED_NAME,
  PROGRESS_FEATURE_SUBCOLLECTION_NAME,
  PLATFORM_PROGRESS_FEATURE_SUBCOLLECTION_NAME,
} from '@/constants/content';
import type {
  SubcollectionNode,
  ExtendedSubcollectionNode,
  PlatformNode,
  FeatureCategoryNode,
  FeatureNode,
  PlatformFeatureNode,
  PlatformProgressFeatureNode,
  CollectionDocumentFieldType,
  UltimateSubcollectionNode,
  ProgressFeatureNode,
  PlatformResourceLink,
  PlatformAccountsNode,
  PlatformsParams,
  PlatformSort,
} from '../../../types/blog-platforms';
const xmlhttprequest = require('xmlhttprequest');
import { COLORS } from '@/constants/colors';
import { DEFAULT_PLATFORMS_LOADING_PARAMS } from '@/constants/settings';

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function readFileFromLocal(filePath: string) {
  const fp = path.join(process.cwd(), filePath);
  return fs.readFileSync(fp, 'utf-8');
}

function readFileFromCloud(filePath: string) {
  const req = new xmlhttprequest.XMLHttpRequest();
  req.open('GET', filePath, false);
  req.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      return this.responseText;
    }
  };
  req.send(null);
}

const readFile = (filePath: string) => readFileFromLocal(filePath);

// const mainCollectionMetadata = JSON.parse(readFile(MAIN_DIR + METADATA_FILE_EXT));
// const subcollectionNames = mainCollectionMetadata.subcollections;

export function getSubcollectionData(subcollectionName: string): UltimateSubcollectionNode[] {
  const subcollectionDir = SUBCOLLECTIONS_DIR + subcollectionName + '/';
  // filenames
  const dataFile = subcollectionDir + DOCUMENTS_FILE_EXT;
  const metadataFile = subcollectionDir + METADATA_FILE_EXT;
  // load json files
  const subcollectionData = JSON.parse(readFile(dataFile));
  const subcollectionMetadata = JSON.parse(readFile(metadataFile));

  // iterate over metadata fields to change media file paths
  const mediaField = subcollectionMetadata.fields.filter(
    (field: CollectionDocumentFieldType) => field.type === MEDIA_FILED_NAME
  );

  // iterate over media fields
  mediaField.forEach((field: CollectionDocumentFieldType) => {
    // iterate over subcollection documents
    subcollectionData.forEach((node: SubcollectionNode) => {
      const fieldName = field.id as keyof SubcollectionNode;
      const fileName = node[fieldName];
      Object.assign(node, {
        [fieldName]: subcollectionDir.replace('/public', '') + 'media/' + fileName,
      });
    });
  });

  // iterate over media fields
  const mediaFields = subcollectionMetadata.fields.filter(
    (field: CollectionDocumentFieldType) => field?.arrayType === MEDIA_FILED_NAME
  );
  mediaFields.forEach((field: CollectionDocumentFieldType) => {
    // iterate over subcollection documents
    subcollectionData.forEach((node: SubcollectionNode) => {
      const fieldName = field.id as keyof SubcollectionNode;
      const fileNames = node[fieldName];
      fileNames.forEach((fileName: string) => {
        Object.assign(node, {
          [fieldName]: subcollectionDir.replace('/public', '') + 'media/' + fileName,
        });
      });
    });
  });
  return subcollectionData;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PLATFORMS DATA
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export function getPlatformsData(params?: PlatformsParams): PlatformNode[] {
  params = { ...DEFAULT_PLATFORMS_LOADING_PARAMS, ...params };
  const platformsData = getSubcollectionData(PLATFORM_SUBCOLLECTION_NAME);

  // Platform features
  platformsData.forEach((platform: PlatformNode) => {
    const platformFeaturesData = getPlatformFeatures(platform.id);
    platform.features = platformFeaturesData.map((pf: PlatformFeatureNode) => pf.feature);
  });

  // If extended is true, add other resources
  // Otherwise, return the data as it is to prevent unnecessary data load
  if (params.extended) {
    // Platform progress features
    platformsData.forEach((platform: PlatformNode) => {
      const progressFeaturesData = getPlatformProgressFeatures(platform.id);
      platform.progressFeatures = progressFeaturesData;
    });

    // Platform accounts
    platformsData.forEach((platform: PlatformNode) => {
      const progressFeaturesData = getPlatformAccountsData(platform.id);
      platform.accounts = progressFeaturesData;
    });

    // Platform resources
    platformsData.forEach((platform: PlatformNode) => {
      const platformResources = getPlatformResourceLinks(platform.id);
      platform.resources = platformResources;
    });
  }
  // Sorting
  const sortFn = (a: PlatformNode, b: PlatformNode) => {
    const platformSortValue = (pl: PlatformNode) => pl[params!.sort_by!] || 100;
    if (platformSortValue(a) < platformSortValue(b)) {
      return -1;
    }
    if (platformSortValue(a) > platformSortValue(b)) {
      return 1;
    }
    return 0;
  };
  return platformsData.sort(sortFn);
}

export function getPlatformData(platformName: string): PlatformNode {
  const platformsData = getPlatformsData({ extended: true });
  const platformData = platformsData.find(
    (platform: PlatformNode) => platform.slug === platformName
  );
  if (!platformData) {
    throw new Error(`No platform data found for ${platformName}`);
  }
  return platformData;
}

export function getPlatformNames(): string[] {
  const platformsData = getPlatformsData();
  const platformNames = platformsData.map((platform: PlatformNode) => platform.slug);
  return platformNames;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FEATURE CATEGORIES DATA
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function getFeatureCategoriesData(): FeatureCategoryNode[] {
  const featureCategoriesData = getSubcollectionData(FEATURE_CATEGORY_SUBCOLLECTION_NAME);
  return featureCategoriesData;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FEATURES DATA
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function getFeatures(): FeatureNode[] {
  const featuresData = getSubcollectionData(FEATURE_SUBCOLLECTION_NAME);

  // Enrich category data
  const featureCategoriesData = getFeatureCategoriesData();
  featureCategoriesData.forEach((fg: FeatureCategoryNode) => {
    featuresData.forEach((f: FeatureNode, ix: number) => {
      if (f.category?.id === fg.id) {
        const modulo = ix % COLORS.length;
        f.category = fg;
        f.color = COLORS[modulo];
      }
    });
  });
  return featuresData;
}

export function getFeature(feature_id?: string): FeatureNode {
  const featuresData = getFeatures();
  const featureData = featuresData.find((feature: FeatureNode) => feature.id === feature_id);
  if (!featureData) {
    throw new Error(`No feature data found for ${feature_id}`);
  }
  return featureData;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PLATFORM FEATURES DATA
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function getPlatformsFeatures(): PlatformFeatureNode[] {
  const featuresData = getSubcollectionData(PLATFORM_FEATURE_SUBCOLLECTION_NAME);
  return featuresData;
}

export function getPlatformFeatures(platform_id: string): PlatformFeatureNode[] {
  const platformsFeaturesData = getPlatformsFeatures();
  const platformFeaturesData = platformsFeaturesData.filter(
    (pf: PlatformFeatureNode) => pf.platform.id === platform_id
  );
  const extendedPlatformFeaturesData = platformFeaturesData.map((pf: PlatformFeatureNode) => {
    const featureData = getFeature(pf.feature.id);
    return { ...pf, feature: { ...pf.feature, ...featureData } };
  });
  return extendedPlatformFeaturesData;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PLATFORM RESOURCE LINKS
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function getPlatformsResourceLinks(): PlatformResourceLink[] {
  const resourceLinksData = getSubcollectionData(PLATFORM_RESOURCE_LINKS_SUBCOLLECTION_NAME);
  return resourceLinksData;
}
export function getPlatformResourceLinks(platform_id: string): PlatformResourceLink[] {
  const resourceLinksData = getPlatformsResourceLinks();
  const platformResourceLinksData = resourceLinksData.filter(
    (pf: PlatformResourceLink) => pf.platform.id === platform_id
  );
  return platformResourceLinksData;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PROGRESS FEATURES DATA
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function getProgressFeatures(): ProgressFeatureNode[] {
  const progressFeaturesData = getSubcollectionData(PROGRESS_FEATURE_SUBCOLLECTION_NAME);
  return progressFeaturesData;
}

export function getPlatformsProgressFeatures(): PlatformProgressFeatureNode[] {
  const platformProgressFeaturesData = getSubcollectionData(
    PLATFORM_PROGRESS_FEATURE_SUBCOLLECTION_NAME
  );
  return platformProgressFeaturesData;
}

export function getPlatformProgressFeatures(platform_id: string): PlatformProgressFeatureNode[] {
  const progressFeaturesData = getProgressFeatures();
  const platformProgressFeaturesData = getPlatformsProgressFeatures();
  const platformProgressFeatures =
    platformProgressFeaturesData.filter(
      (ppf: PlatformProgressFeatureNode) => ppf.platform.id === platform_id
    ) || [];
  const platformProgressEnhancedFeatures = platformProgressFeatures.map(
    (ppf: PlatformProgressFeatureNode) => {
      const progressFeatureData = progressFeaturesData.find(
        (pf: ProgressFeatureNode) => pf.id === ppf.comparable_feature.id
      );
      return { ...ppf, comparable_feature: { ...ppf.comparable_feature, ...progressFeatureData } };
    }
  );
  return platformProgressEnhancedFeatures || [];
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PLATFORM ACCOUNTS DATA
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export function getPlatformsAccountsData(): PlatformAccountsNode[] {
  const platformsAccountsData = getSubcollectionData(PLATFORM_ACCOUNTS_SUBCOLLECTION_NAME);
  return platformsAccountsData;
}

export function getPlatformAccountsData(platform_id: string): PlatformAccountsNode | {} {
  const platformsAccountsData = getPlatformsAccountsData();
  const platformData = platformsAccountsData.find(
    (pa: PlatformAccountsNode) => pa.platform.id === platform_id
  );
  return platformData || {};
}
