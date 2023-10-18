import { Color } from './colors';

export type PlatformSort = 'order' | 'title' | 'slug';
export type PlatformsParams = {
  sort_by?: PlatformSort;
  extended?: boolean; // return full-scope data if it is true
};

export interface SubcollectionNode {
  id: string;
  shortID: string;
  entity: any;
  weight: number;
  modifiedAt: string;
  createdAt: string;
}
export interface ExtendedSubcollectionNode extends SubcollectionNode {
  [key: string]: any;
}

export type CollectionDocumentFieldType = {
  id: string;
  name: string;
  type: string;
  arrayType?: string;
};

export interface PlatformNode extends ExtendedSubcollectionNode {
  id: string;
  order: number;
  title: string;
  slug: string;
  email?: string;
  url: string;

  tags?: string[];
  active?: boolean;
  audience?: string;
  free?: string;
  color?: string;

  // Images
  cover?: string;
  logo?: string;
  media?: string[];

  description?: string;
  body?: string;

  // pros & cons
  pros?: string[];
  cons?: string[];

  accounts: PlatformAccountsNode | {};
  features: FeatureNode[];
  progressFeatures: PlatformProgressFeatureNode[];
  resources: PlatformResourceLink[];
}

// FEATURES
export interface FeatureCategoryNode extends ExtendedSubcollectionNode {
  slug: string;
  title: string;
  description?: string;
}

export interface FeatureNode extends ExtendedSubcollectionNode {
  title: string;
  slug: string;
  description?: string;
  category: Pick<FeatureCategoryNode, 'title' | 'id'>;
  color?: Color;
}

export interface PlatformFeatureNode extends SubcollectionNode {
  platform: Pick<PlatformNode, 'title' | 'id'>;
  feature: FeatureNode;
  type?: 'built-in' | 'plugins' | 'integrations';
  notes?: string;
}

export interface PlatformResourceLink extends SubcollectionNode {
  platform: Pick<PlatformNode, 'title' | 'id'>;
  title: string;
  description?: string;
  image: string;
  url: string;
  slug?: string;
}

export interface ProgressFeatureNode extends ExtendedSubcollectionNode {
  id: string;
  title: string;
  slug: string;
  description?: string;
}

export type Rating = 'None' | 'Low' | 'Medium' | 'High' | 'Best';

export interface PlatformProgressFeatureNode extends SubcollectionNode {
  platform: Pick<PlatformNode, 'title' | 'id'>;
  comparable_feature: Pick<ProgressFeatureNode, 'title' | 'id'> & ProgressFeatureNode;
  type?: 'built-in' | 'plugins' | 'integrations';
  rating: Rating;
}

export interface PlatformAccountsNode extends SubcollectionNode {
  id: string;
  platform: Pick<PlatformNode, 'title' | 'id'>;

  weight: number;

  showcase?: string;
  tel?: string;
  email?: string;
  location?: string;
  blog?: string;

  // Socials
  facebook?: string;
  linkedin?: string;
  mastodon?: string;
  github?: string;
  instagram?: string;
  pinterest?: string;
  spotify?: string;
  tiktok?: string;
  website?: string;
  wikidata?: string;
  wikipedia?: string;
  x?: string;
  youtube?: string;

  // Apps
  android?: string;
  ios?: string;
  linux?: string;
  macos?: string;
  windows?: string;
}

export type UltimateSubcollectionNode = SubcollectionNode &
  (PlatformNode &
    FeatureCategoryNode &
    FeatureNode &
    PlatformFeatureNode &
    PlatformResourceLink &
    ProgressFeatureNode &
    PlatformProgressFeatureNode &
    PlatformAccountsNode);
