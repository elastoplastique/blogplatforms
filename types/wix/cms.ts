import type { BodyItem, BodyItemUnion } from './rich-content';

export type MedıaItemType = 'image' | 'video';
export interface Media {
  description: string;
  slug: string;
  alt: string;
  src: string;
  title: string;
  type: MedıaItemType;
  assetKey?: string;
  settings: {
    width: number;
    height: number;
    focalPoint: [x: number, y: number];
  };
}

export interface DataItem {
  /** Data item ID. */
  _id?: string;
  /**
   * Data item contents.
   *
   * Property-value pairs representing the data item's payload. When retrieving a data item, it also includes the following read-only fields:
   *
   * + `_id`: Item ID.
   * + `_createdDate`: Date and time the item was added to the collection.
   * + `_updatedDate`: Date and time the item was last modified. When the item is first inserted, `_createdDate` and `_updatedDate` have the same value.
   * + `_ownerId`: ID of the user who created the item. Can be modified with site owner permissions.
   */
  data?: Record<string, any> | null;
}

export type PlatformSort = 'order' | 'title' | 'slug';
export type PlatformsParams = {
  sort_by?: PlatformSort;
  extended?: boolean; // return full-scope data if it is true
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PLATFORM TYPES
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export interface PlatformTypeNode {
  _id: string;
  title: string;
  slug: string;
}
export interface PlatformType extends DataItem {
  data: PlatformTypeNode;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PLATFORMS
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export interface PlatformNode {
  _id: string;
  order: number;
  title: string;
  slug: string;
  url: string;
  description?: string;
  body?: { nodes: BodyItemUnion[] };

  audience?: [string];

  // Images
  cover?: string;
  logo?: string;
  media?: Wix.Media[];

  // pros & cons
  pros?: string;
  cons?: string;

  resources?: { nodes: BodyItemUnion[] };
  updates?: { nodes: BodyItemUnion[] };
  type?: PlatformTypeNode;

  features?: PlatformFeatureNode[];
  comparativeFeatures?: PlatformComparativeFeatureNode[];
  posts: PostNode[];
  affiliation?: boolean;
  pageTitle?: string;
  freePlan?: boolean;
  ecommerceIntegration?: boolean;
}
export interface Platform extends DataItem {
  _id: string;
  data: PlatformNode;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FEATURES
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export interface FeatureNode {
  _id: string;
  title: string;
  slug: string;
  header?: string;
  description?: string;
  body?: { nodes: BodyItemUnion[] };
  category?: string[];
  image?: string;
  keywords?: string;
}
export interface PlatformFeatureNode {
  _id: string;
  slug: string;
  title: string;
  platform: PlatformNode;
  feature: FeatureNode;
  featureData: FeatureNode;
  note?: string;
}
export interface Feature extends DataItem {
  data: FeatureNode;
}
export interface PlatformFeature extends DataItem {
  data: PlatformFeatureNode;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// COMPARATIVE FEATURES
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export type Rating = 'None' | 'Low' | 'Medium' | 'High' | 'Best';

export interface ComparativeFeatureNode extends Omit<FeatureNode, 'category'> {}
export interface ComparativeFeature extends DataItem {
  data: ComparativeFeatureNode;
}
export interface PlatformComparativeFeatureNode extends PlatformFeatureNode {
  rating: Rating;
  // feature: ComparativeFeatureNode['_id'];
  featureData: ComparativeFeatureNode;
}
export interface PlatformComparativeFeature extends DataItem {
  data: PlatformComparativeFeatureNode;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ACCOUNTS
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export interface AccountsNode {
  platform: PlatformNode;
  slug: string;
  website?: string;

  // Socials
  facebook?: string;
  discord?: string;
  github?: string;
  instagram?: string;
  linkedin?: string;
  mastodon?: string;
  pinterest?: string;
  reddit?: string;
  spotify?: string;
  telegram?: string;
  threads?: string;
  tiktok?: string;
  wikipedia?: string;
  wikidata?: string;
  x?: string;
  youtube?: string;
  _createdDate: { $date: string };
  _updatedDate: { $date: string };
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// POSTS & TAGS
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export interface PostNode {
  _id: string;
  slug: string;
  canonical?: string;
  published?: boolean;
  order?: number;
  title: string;
  description?: string;
  cover?: string;
  body?: { nodes: BodyItemUnion[] };
  platforms?: PlatformNode[];
  _createdDate?: { $date: string };
  _updatedDate?: { $date: string };
  about?: RichData.SameAsType;
  mentions?: RichData.SameAsType[];
  questions?: RichData.RawQA[];
  keywords?: string;
  relatedPosts?: PostNode[];
}
export interface TagNode {
  _id: string;
  slug: string;
  title: string;
  note?: string;
  posts?: PostNode[];
}

export interface Accounts extends DataItem {
  data: AccountsNode;
}
export type CmsDataItem = Platform | Feature | PlatformFeature | ComparativeFeature | PlatformComparativeFeature | Accounts;
export type CmsItem =
  | PlatformNode
  | FeatureNode
  | PlatformFeatureNode
  | ComparativeFeatureNode
  | PlatformComparativeFeatureNode
  | AccountsNode;

export type CmsDocumentType = {
  _id: string;
  data: PlatformTypeNode | FeatureNode | PlatformFeatureNode | PlatformComparativeFeatureNode | AccountsNode;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PAGES
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export interface PageNode {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  body?: { nodes: BodyItemUnion[] };

  // Images
  cover?: string;
}
