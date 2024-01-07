import { createClient, OAuthStrategy } from '@wix/sdk';
import type {
  PlatformNode,
  FeatureNode,
  PlatformFeatureNode,
  PlatformTypeNode,
  ComparativeFeatureNode,
  PlatformComparativeFeatureNode,
  AccountsNode,
} from '../../../../types';
import { media as wixMedia } from '@wix/api-client';

import { members } from '@wix/members';
import { useEffect, useState } from 'react';
import { items } from '@wix/data';
import { getServerWixClient } from '@/lib/wix/auth/wix-client.server';
import { createWixStaticUrl } from '@/lib/wix/utils/create-url';
import Cookies from 'js-cookie';
import { wixClient } from '@/lib/wix/provider/client-provider';

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CONSTANTS
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const COLLECTIONS = {
  PLATFORMS: 'platforms',
  FEATURES: 'features',
  COMPARATIVE_FEATURES: 'comparativeFeatures',
  ACCOUNTS: 'Accounts',
  PLATFORM_TYPES: 'platformTypes',

  // JOIN COLLECTIONS
  PLATFORMS_FEATURES: 'platformFeatures',
  PLATFORMS_COMPARATIVE_FEATURES: 'platformComparativeFeatures',
  POSTS: 'Posts',
  TAGS: 'Tags',
  PAGES: 'pages',
  COMMENTS: 'comments',
  USERS: 'users',
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TYPES
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
type ValueOf<T> = T[keyof T];
type DataCollectionId = ValueOf<typeof COLLECTIONS>;
type GetDataItemParams = {
  dataItemId: string;
  options?: {
    dataCollectionId: DataCollectionId;
  };
};
type QueryDataItemsOptions = {
  dataCollectionId: DataCollectionId;
  eq: [key: string, value: any] | string[];
  includeReferencedItems?: string[];
  options?: {
    limit?: number;
    offset?: number;
    query?: string;
    sort?: string;
  };
};
type QueryReferencedDataItemsOptions = {
  dataCollectionId: DataCollectionId;
  orderBy?: 'ASC' | 'DESC';
  referringItemFieldName: string;
  referringItemId: string;
  returnTotalCount?: boolean;
};
type QueryReferencedDataItemsResponse = {
  results: Array<{
    entity: {
      dataItem: DataItem;
      unresolvedReference?: {
        referringItemFieldName: string;
        referringItemId: string;
      };
    };
  }>;
};
type DataItemsQueryResult = {
  query: QueryDataItemsOptions;
  items: any[];
  currentPage: number;
  length: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CLIENT & GENERIC FUNCTION
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

export async function getItems(dataCollectionId: DataCollectionId, references: string[] = []): Promise<DataItemsQueryResult['items']> {
  const dataItemsList = await wixClient.items
    .queryDataItems({
      dataCollectionId: dataCollectionId,
      includeReferencedItems: references,
      // Please specify the dataCollectionId you require
    })
    .find();
  return (
    dataItemsList.items.map((item: any) => {
      // console.log("ITEM", JSON.stringify(item, null, 2))
      return item.data;
    }) || ([] as CmsItem[])
  );
}

export async function queryItems(options: QueryDataItemsOptions): Promise<DataItemsQueryResult['items']> {
  const dataItemsList = await wixClient.items
    .queryDataItems({
      dataCollectionId: options.dataCollectionId,
      ...(options?.includeReferencedItems && { includeReferencedItems: options?.includeReferencedItems }),
    })
    .eq(options.eq[0], options.eq[1])
    .find();
  return (
    dataItemsList.items.map((item: any) => {
      // console.log("ITEM", JSON.stringify(item, null, 2))
      return item.data;
    }) || ([] as CmsItem[])
  );
}

export async function queryReferencedItems(options: QueryReferencedDataItemsOptions): Promise<QueryReferencedDataItemsResponse['results']> {
  const dataItemsList = await wixClient.items.queryReferencedDataItems(options);
  return (
    dataItemsList.results.map((item: any) => {
      // console.log("ITEM", JSON.stringify(item, null, 2))
      return item.data;
    }) || ([] as CmsItem[])
  );
}

export async function getItem({ dataItemId, options }: GetDataItemParams) {
  return await wixClient.items.getDataItem(dataItemId, options);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PLATFORMS DATA
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export async function getPlatforms(): Promise<PlatformNode[]> {
  const platforms = await getItems(COLLECTIONS.PLATFORMS, ['platformType']);
  // for await (const p of platforms) {
  //   p.features = await getPlatformFeatures(p._id);
  // }
  return platforms;
}

export async function getPlatform(slug: string): Promise<PlatformNode> {
  const platforms = await queryItems({
    dataCollectionId: COLLECTIONS.PLATFORMS,
    eq: ['slug', slug],
    includeReferencedItems: ['posts'],
  });
  const platform = platforms.find((platform) => platform.slug === slug) || ({} as PlatformNode);

  // Image field URL fix
  if (platform.logo) platform.logo = createWixStaticUrl(platform.logo!);
  if (platform.cover) platform.cover = createWixStaticUrl(platform.cover!);

  // Media field URL fix
  let images = platform.media?.filter((mediaItem: Wix.Media) => mediaItem.type === 'image') || [];
  if (images) {
    images.forEach((mediaItem: Wix.Media) => {
      mediaItem.src = createWixStaticUrl(mediaItem.src);
    });
  }

  // let videos = platform.media?.filter((mediaItem: Wix.Media) => mediaItem.type === 'video') || [];
  // for await (const v of videos) {
  //   const videoResponse = await wixClient.files.generateVideoStreamingUrl(v.slug);
  //   // console.log('VIDEO RESPONSE', videoResponse)
  //   if (videoResponse?.downloadUrl && videoResponse?.downloadUrl.url) {
  //     v.src = videoResponse.downloadUrl.url;
  //     v.assetKey = videoResponse.downloadUrl.assetKey;
  //   }
  // }
  platform.media = [...images];

  // media = media
  //   ?.filter((mediaItem: Wix.Media) => mediaItem.type === 'image')
  //   .map((mediaItem: Wix.Media) => ({ ...mediaItem, src: createWixStaticUrl(mediaItem.src) }));

  // platform.logo = generateFileUrl(platform.logo!)
  // console.log("PLATFORM", platform)

  return platform;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FEATURES DATA
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export async function getFeatures(): Promise<FeatureNode[]> {
  return await getItems(COLLECTIONS.FEATURES);
}
export async function getFeature(slug: string): Promise<FeatureNode> {
  const features = await getFeatures();
  return features.find((feature) => feature.slug === slug) || ({} as FeatureNode);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// COMPARATIVE FEATURES  DATA
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export async function getComparativeFeatures(): Promise<ComparativeFeatureNode[]> {
  return await getItems(COLLECTIONS.COMPARATIVE_FEATURES, ['feature', 'platform']);
}
export async function getComparativeFeature(comparativeFeatureId: string): Promise<ComparativeFeatureNode> {
  const comparatveFeatures = await getComparativeFeatures();
  return comparatveFeatures.find((comparativeFeature) => comparativeFeature._id === comparativeFeatureId) || ({} as ComparativeFeatureNode);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ACCOUNTS DATA
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export async function getAllAccounts(): Promise<AccountsNode[]> {
  return await getItems(COLLECTIONS.ACCOUNTS, ['platform']);
}
export async function getPlatformAccounts(slug: string): Promise<AccountsNode> {
  const allAccounts = await getAllAccounts();
  return allAccounts.find((accounts) => accounts.slug === slug) || ({} as AccountsNode);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PLATFORMS FFEATURES DATA
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export async function getPlatformsFeatures(): Promise<PlatformFeatureNode[]> {
  return await getItems(COLLECTIONS.PLATFORMS_FEATURES, ['feature', 'platform']);
}

// All PLATFORM FEATURES FOR A GIVEN PLATFORM
export async function getPlatformFeatures(platformId?: string): Promise<PlatformFeatureNode[]> {
  const platformFeatures = await queryItems({
    dataCollectionId: COLLECTIONS.PLATFORMS_FEATURES,
    eq: ['platform', platformId],
    includeReferencedItems: ['feature', 'platform'],
  });
  // for await (const pf of platformFeatures) {
  //   pf.featureData = await getFeature(pf.feature);
  // }
  return platformFeatures;
}
export async function getPlatformFeaturesByFeatureId(featureId?: string): Promise<PlatformFeatureNode[]> {
  const platformFeatures = await queryItems({
    dataCollectionId: COLLECTIONS.PLATFORMS_FEATURES,
    eq: ['feature', featureId],
    includeReferencedItems: ['feature', 'platform'],
  });
  // for await (const pf of platformFeatures) {
  //   pf.featureData = await getFeature(pf.feature);
  // }
  return platformFeatures;
}

export async function getPlatformFeaturesByFeatureSlug(featureSlug?: string): Promise<PlatformFeatureNode[]> {
  const feature = await getFeature(featureSlug!);
  const platformFeatures = await queryItems({
    dataCollectionId: COLLECTIONS.PLATFORMS_FEATURES,
    eq: ['feature', feature._id],
    includeReferencedItems: ['feature', 'platform'],
  });
  // for await (const pf of platformFeatures) {
  //   pf.featureData = await getFeature(pf.feature);
  // }
  return platformFeatures;
}

// SPECIFIC PLATFORM FEATURE FOR A GIVEN PLATFORM AND A GIVEN FEATURE
export async function getPlatformFeature({
  platformId,
  featureId,
}: {
  platformId?: string;
  featureId?: string;
}): Promise<PlatformFeatureNode> {
  const platformsFeatures = await getPlatformsFeatures();
  const platformFeatures = platformsFeatures.find((platformFeature) => {
    if (platformFeature.platform._id === platformId && platformFeature.feature._id === featureId) return true;
    return false;
  });
  return platformFeatures || ({} as PlatformFeatureNode);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PLATFORMS COMPARATIVE FFEATURES DATA
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export async function getPlatformsComparativeFeatures(): Promise<PlatformComparativeFeatureNode[]> {
  return await getItems(COLLECTIONS.PLATFORMS_COMPARATIVE_FEATURES, ['feature', 'platform']);
}

// SPECIFIC PLATFORM COMPARATIVE FEATURE FOR A GIVEN PLATFORM AND A GIVEN  COMPARATIVE FEATURE
export async function getPlatformComparativeFeature({
  platformId,
  featureId,
}: {
  platformId?: string;
  featureId?: string;
}): Promise<PlatformComparativeFeatureNode> {
  const platformsFeatures = await getPlatformsComparativeFeatures();
  const platformFeatures = platformsFeatures.find((platformFeature) => {
    if (platformFeature.platform._id === platformId && platformFeature.feature._id === featureId) return true;
    return false;
  });
  return platformFeatures || ({} as PlatformComparativeFeatureNode);
}

// All PLATFORM COMPARATIVE FEATURES FOR A GIVEN PLATFORM
export async function getPlatformComparativeFeatures(platformId?: string): Promise<PlatformComparativeFeatureNode[]> {
  const platformsComparativeFeatures = await getPlatformsComparativeFeatures();
  let platformComparativeFeatures = platformsComparativeFeatures.filter((platformFeature) => {
    if (platformId && platformFeature.platform._id === platformId) return true;
    return false;
  });
  platformComparativeFeatures.forEach(async (platformComparativeFeature) => {
    platformComparativeFeature.featureData = await getComparativeFeature(platformComparativeFeature.feature._id);
  });
  return platformComparativeFeatures;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PLATFORM TYPES DATA
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export async function getPlatformTypes(): Promise<PlatformTypeNode[]> {
  return await getItems(COLLECTIONS.PLATFORM_TYPES);
}
export async function getPlatformType(slug: string): Promise<PlatformTypeNode> {
  const platformTypes = await getPlatformTypes();
  return platformTypes.find((platformType) => platformType.slug === slug) || ({} as PlatformTypeNode);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// POSTS DATA
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export async function getPosts(): Promise<Wix.PostNode[]> {
  return await getItems(COLLECTIONS.POSTS, ['platforms', 'platforms.accounts']);
}
export async function getPost(slug: string): Promise<Wix.PostNode> {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug) || ({} as Wix.PostNode);
}

export async function getTags(): Promise<Wix.TagNode[]> {
  return await getItems(COLLECTIONS.TAGS);
}
export async function getTag(slug: string): Promise<Wix.TagNode> {
  const tags = await getTags();
  return tags.find((tag) => tag.slug === slug) || ({} as Wix.TagNode);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FILES
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export async function getFileDescriptors({ fileIds }: Wix.GetFileDescriptorsRequest): Promise<Wix.GetFileDescriptorsResponse> {
  const result = await wixClient.files.getFileDescriptors(fileIds);
  return result;
}
export async function getFileDescriptor(fileId: string): Promise<Wix.GetFileDescriptorResponse['file']> {
  const result = await wixMedia.getImageUrl(fileId);
  return result;
}

export async function generateFilesDownloadUrl({
  fileIds,
}: Wix.GenerateFilesDownloadUrlRequest): Promise<Wix.GenerateFilesDownloadUrlResponse> {
  const result = await wixClient.files.generateFilesDownloadUrl(fileIds);
  return result;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PLATFORMS DATA
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// COMPUTED DATA
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// AUDIENCES
export async function getAudiences(): Promise<string[]> {
  const platforms = await getPlatforms();
  const audiencesSet = new Set();
  platforms.forEach((platform) => {
    if (platform.audience) {
      platform.audience.forEach((audience: string) => {
        audiencesSet.add(audience);
      });
    }
  });
  const audiences = Array.from(audiencesSet) as string[];
  return audiences;
}

export async function getPlatformSlugs(): Promise<string[]> {
  const platforms = await getPlatforms();
  return platforms.map((platform) => platform.slug);
}

export async function getFeatureSlugs(): Promise<string[]> {
  const features = await getFeatures();
  return features.map((feature) => feature.slug);
}

export async function getPostSlugs(): Promise<string[]> {
  const posts = await getPosts();
  return posts.filter((post) => post?.published).map((post) => post.slug);
}

export function generateFileUrl(fileId: string): string {
  if (fileId.startsWith('wix:image://v1/')) {
    return `https://static.wixstatic.com/media/${fileId.replace('wix:image://v1/', '')}`;
  }
  return `https://static.wixstatic.com/media/${fileId}`;
}

export const getRichData = async (url: string) => {
  const response = await fetch(url);
  const textResponse = await response.text();
  if (textResponse) {
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(textResponse, 'text/html');
  }
  return textResponse;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PAGES DATA
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export async function getPages(): Promise<Wix.PageNode[]> {
  return await getItems(COLLECTIONS.PAGES);
}
export async function getPage(slug: string): Promise<Wix.PageNode> {
  const pages = await getPages();
  const page = pages.find((page) => page.slug === slug) || ({} as Wix.PageNode);
  if (page?.cover) page.cover = createWixStaticUrl(page.cover!);
  return page;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// USERS
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

