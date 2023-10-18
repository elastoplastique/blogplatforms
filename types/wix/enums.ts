export declare enum CollectionType {
  /** User-created collection. */
  NATIVE = 'NATIVE',
  /** [Collection](https://support.wix.com/en/article/velo-working-with-wix-app-collections-and-code#what-are-wix-app-collections) created by a Wix app when it is installed. This type of collection can be modified dynamically by that app (for example, Wix Forms). */
  WIX_APP = 'WIX_APP',
  /** Collection created by a Wix Blocks app. */
  BLOCKS_APP = 'BLOCKS_APP',
  /** Collection located in externally connected storage. */
  EXTERNAL = 'EXTERNAL',
}

export declare enum Role {
  /** Unknown. */
  UNKNOWN_ROLE = 'UNKNOWN_ROLE',
  /** Site administrator. */
  ADMIN = 'ADMIN',
  /** Signed-in user who added content to this collection. */
  SITE_MEMBER_AUTHOR = 'SITE_MEMBER_AUTHOR',
  /** Any signed-in user. */
  SITE_MEMBER = 'SITE_MEMBER',
  /** Any site visitor. */
  ANYONE = 'ANYONE',
}

export declare enum FieldType {
  UNKNOWN_FIELD_TYPE = 'UNKNOWN_FIELD_TYPE',
  TEXT = 'TEXT',
  NUMBER = 'NUMBER',
  DATE = 'DATE',
  DATETIME = 'DATETIME',
  IMAGE = 'IMAGE',
  BOOLEAN = 'BOOLEAN',
  DOCUMENT = 'DOCUMENT',
  URL = 'URL',
  RICH_TEXT = 'RICH_TEXT',
  VIDEO = 'VIDEO',
  ANY = 'ANY',
  ARRAY_STRING = 'ARRAY_STRING',
  ARRAY_DOCUMENT = 'ARRAY_DOCUMENT',
  AUDIO = 'AUDIO',
  TIME = 'TIME',
  LANGUAGE = 'LANGUAGE',
  RICH_CONTENT = 'RICH_CONTENT',
  MEDIA_GALLERY = 'MEDIA_GALLERY',
  ADDRESS = 'ADDRESS',
  PAGE_LINK = 'PAGE_LINK',
  REFERENCE = 'REFERENCE',
  MULTI_REFERENCE = 'MULTI_REFERENCE',
  OBJECT = 'OBJECT',
  ARRAY = 'ARRAY',
  /** Deprecated - can’t be added to collections. Can only appear in older collections. */
  LEGACY_TIME = 'LEGACY_TIME',
  /** Deprecated - can’t be added to collections. Can only appear in older collections. */
  LEGACY_BOOK = 'LEGACY_BOOK',
  /** Deprecated - can’t be added to collections. Can only appear in older collections. */
  LEGACY_EXTERNAL_URL = 'LEGACY_EXTERNAL_URL',
  /** Deprecated - can’t be added to collections. Can only appear in older collections. */
  LEGACY_BROKEN_REFERENCE = 'LEGACY_BROKEN_REFERENCE',
  /** Deprecated - can’t be added to collections. Can only appear in older collections. */
  LEGACY_IMAGE = 'LEGACY_IMAGE',
  /** Deprecated - can’t be added to collections. Can only appear in older collections. */
  LEGACY_COLOR = 'LEGACY_COLOR',
  /** Deprecated - can’t be added to collections. Can only appear in older collections. */
  LEGACY_EXTERNAL_VIDEO = 'LEGACY_EXTERNAL_VIDEO',
}
export declare enum QueryOperator {
  EQ = 'EQ',
  LT = 'LT',
  GT = 'GT',
  NE = 'NE',
  LTE = 'LTE',
  GTE = 'GTE',
  STARTS_WITH = 'STARTS_WITH',
  ENDS_WITH = 'ENDS_WITH',
  CONTAINS = 'CONTAINS',
  HAS_SOME = 'HAS_SOME',
  HAS_ALL = 'HAS_ALL',
  EXISTS = 'EXISTS',
  URLIZED = 'URLIZED',
}
export declare enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}
export declare enum Direction {
  ASC = 'ASC',
  DESC = 'DESC',
}
export declare enum DataOperation {
  AGGREGATE = 'AGGREGATE',
  BULK_INSERT = 'BULK_INSERT',
  BULK_REMOVE = 'BULK_REMOVE',
  BULK_SAVE = 'BULK_SAVE',
  BULK_UPDATE = 'BULK_UPDATE',
  COUNT = 'COUNT',
  DISTINCT = 'DISTINCT',
  FIND = 'FIND',
  GET = 'GET',
  INSERT = 'INSERT',
  INSERT_REFERENCE = 'INSERT_REFERENCE',
  IS_REFERENCED = 'IS_REFERENCED',
  QUERY_REFERENCED = 'QUERY_REFERENCED',
  REMOVE = 'REMOVE',
  REMOVE_REFERENCE = 'REMOVE_REFERENCE',
  REPLACE_REFERENCES = 'REPLACE_REFERENCES',
  SAVE = 'SAVE',
  TRUNCATE = 'TRUNCATE',
  UPDATE = 'UPDATE',
}
