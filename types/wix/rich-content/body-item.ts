///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BODY ITEM
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type BodyItemType =
  | 'TEXT'
  | 'LIST_ITEM'
  | 'PARAGRAPH'
  | 'HEADING'
  | 'TABLE'
  | 'TABLE_ROW'
  | 'TABLE_CELL'
  | 'LINK_PREVIEW'
  | 'ORDERED_LIST'
  | 'VIDEO'
  | 'IMAGE'
  | 'MEDIA'
  | 'BLOCKQUOTE'
  | 'BULLETED_LIST'
  | 'CODE_BLOCK'
  | 'EMBED'
  | 'FILE'
  | 'HTML'
  | 'DIVIDER';

export interface BodyItem<T> extends Wix.NodeType<T> {
  _id: string;
  id?: string;
  nodes: BodyItem<Wix.BodyItemType>[];
}
