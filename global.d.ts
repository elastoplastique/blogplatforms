import * as Platforms from './types/cms';
// export * as externalDatabaseConnections from '@wix/data/src/data-v1-external-database-connection.universal';
// export * as collections from '@wix/data/src/data-v2-data-collection.universal';
// export * as items from '@wix/data/src/data-v2-data-item.universal';
// export * as indexes from '@wix/data/src/data-v2-index.universal';

declare global {
  // declare type PlatformSort = Platforms.PlatformSort
  // declare type PlatformsParams = Platforms.PlatformsParams
  declare type PlatformNode = Platforms.PlatformNode;
  declare type FeatureNode = Platforms.FeatureNode;
  declare type PlatformFeatureNode = Platforms.PlatformFeatureNode;
  declare type PlatformTypeNode = Platforms.PlatformTypeNode;
  declare type ComparativeFeatureNode = Platforms.ComparativeFeatureNode;
  declare type PlatformComparativeFeatureNode = Platforms.PlatformComparativeFeatureNode;
  declare type AccountsNode = Platforms.AccountsNode;
  declare type CmsDocumentType = Platforms.CmsDocumentType;
  declare type DataItem = Platforms.DataItem;
  declare type CmsDataItem = Platforms.CmsDataItem;
  declare type CmsItem = Platforms.CmsItem;

  declare type IconType = {
    size: number;
    color: string;
    strokeWidth: number;
    absoluteStrokeWidth?: boolean;
  };
  declare type NavLinkType = {
    path: string;
    text: string;
    description?: string;
    html?: string;
    children?: NavLinkType[];
    icon?: string;
  };
  declare type StaticPaths = {
    params: { slug: string };
  };

  declare type FrontMatter = {
    title: string;
    slug?: string;
    description?: string;
    cover?: string;
    tags?: string[];
  };
  declare type FullContent = {
    frontMatter: FrontMatter;
    content: string;
  };
}

declare module 'remark-relative-links';
declare module 'js-cookie';
declare module 'wix';
