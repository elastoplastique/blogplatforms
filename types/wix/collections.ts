export interface FieldCapabilities {
  /**
   * Whether the collection can be sorted by this field.
   *
   * Default: `false`
   */
  sortable?: boolean;
  /**
   * Query operators that can be used for this field.
   *
   * Supported values: `EQ`, `LT`, `GT`, `NE`, `LTE`, `GTE`, `STARTS_WITH`, `ENDS_WITH`, `CONTAINS`, `HAS_SOME`, `HAS_ALL`, `EXISTS`, `URLIZED`.
   */
  queryOperators?: Wix.QueryOperator[];
}

export interface Paging {
  /** Number of items to load. */
  limit?: number | null;
  /** Number of items to skip in the current sort order. */
  offset?: number | null;
}
export interface ListDataCollectionsRequest {
  /**
   * Defines how collections in the response are sorted.
   *
   * Default: Ordered by ID in ascending order.
   */
  sort?: Sorting;
  /** Pagination information. */
  paging?: Paging;
}
export interface Sorting {
  /** Name of the field to sort by. */
  fieldName?: string;
  /** Sort order. */
  order?: Wix.SortOrder;
}
