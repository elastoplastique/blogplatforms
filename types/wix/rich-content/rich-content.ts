export type BodyMetadata = {
  _id: string;
  createdTimestamp: string;
  updatedTimestamp: string;
  version: number;
};

type TextAlignment = 'AUTO' | 'LEFT' | 'CENTER' | 'RIGHT' | 'JUSTIFY';

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TEXT DECORATION
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export type DecorationType = 'BOLD' | 'ITALIC' | 'UNDERLINE' | 'STRIKETHROUGH' | 'LINK' | 'COLOR';
export interface Decoration<T> {
  type: T;
}

export interface BoldDecoration extends Decoration<'BOLD'> {
  fontWeightValue?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}
export interface UnderlineDecoration extends Decoration<'UNDERLINE'> {}

export interface ItalicDecoration extends Decoration<'ITALIC'> {
  italicData?: boolean;
}

export interface ColorDecoration extends Decoration<'COLOR'> {
  colorData: {
    background: string;
    foreground: string;
  };
}

export interface LinkDecoration extends Decoration<'LINK'> {
  linkData: {
    link: {
      url: string;
      target?: string;
      rel?: {
        nofollow?: boolean;
        noreferrer?: boolean;
      };
    };
  };
}

export type TextDecorationUnion = BoldDecoration | ItalicDecoration | LinkDecoration | ColorDecoration | UnderlineDecoration;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BODY ITEM CHILDREN
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// export type Wix.BodyItemType = "TEXT" | "LIST_ITEM" | Wix.BodyItemType
// type BodyItemDataType = "textData" | "headingData" | "linkPreviewData"

// export interface BodyItem<Wix.BodyItemType> extends NodeType<Wix.BodyItemType> {
//   _id: string;
//   type: Wix.BodyItemType
//   nodes?: BodyItem<Wix.BodyItemType>[];
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BODY ITEM DATA
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export type BodyItemHeadingData = {
  level: number;
  textStyle: {
    textAlignment: TextAlignment;
  };
  indentation: number;
};

type BodyItemTextData = {
  text: string;
  decorations: TextDecorationUnion[];
};
type BodyItemParagraphData = {
  textStyle: {
    textAlignment: TextAlignment;
  };
  indentation: number;
  style?: {
    [key: string]: string | number | boolean | null | undefined;
  };
};

type BlockquoteData = {
  blockquoteData: {
    indentation: number;
  };
};

type BodyItemListData = {
  indentation: number;
};

type BodyItemCodeBlockData = {
  textStyle: {
    textAlignment: TextAlignment;
  };
};

type BodyItemVideoData = {
  containerData: {
    width: {
      size: string;
    };
    alignment: TextAlignment;
    textWrap: boolean;
  };
  video: {
    src: {
      _id: string;
      id?: string;
      url?: string;
    };
    duration: number;
  };
  thumbnail: {
    src: {
      _id: string;
    };
    width: number;
    height: number;
  };
};

type BodyItemImageData = {
  containerData: {
    width: {
      size: string;
    };
    alignment: TextAlignment;
    textWrap: boolean;
  };
  image: {
    src: {
      _id: string;
      id?: string;
    };
    width: number;
    height: number;
  };
  link?: { url: string };
  altText?: string;
};

type BodyItemMediaData = {
  items: Array<{
    image: {
      media: {
        src: {
          url: string;
        };
        width: number;
        height: number;
      };
    };
  }>;
  options: {
    layout: {
      type: string;
      horizontalScroll: boolean;
      orientation: string;
      numberOfColumns: number;
    };
    item: {
      ratio: number;
      crop: string;
    };
    thumbnails: {
      placement: string;
    };
  };
};

type BodyItemFileData = {
  src: {
    _id: string;
  };
  name: string;
  type: string;
  size: number;
};

type BodyItemEmbedData = {
  containerData: {
    width: {
      custom: string;
    };
    alignment: TextAlignment;
    textWrap: boolean;
  };
  oembed: {
    type: string;
    html: string;
  };
  src: string;
};


type BodyItemHTMLData = {
  containerData: {
    textWrap: boolean;
    spoiler: {};
    alignment: string;
    height: {
      custom: string;
    };
    width: {
      custom: string;
    };
  };
  html: string;
  url?: string;
  source: string;
};

type BodyItemDividerData = {
  lineStyle: string;
  width: string;
  alignment: string;
};

type BodyItemDataUnion =
  | BodyItemTextData
  | BodyItemHeadingData
  | BodyItemParagraphData
  | BodyItemListData
  | BodyItemVideoData
  | BodyItemImageData
  | BlockquoteData
  | BodyItemCodeBlockData
  | BodyItemEmbedData
  | BodyItemFileData
  | Wix.BodyItemTableData
  | BodyItemHTMLData
  | BodyItemDividerData
  | BodyItemMediaData;

// type BodyItemDataType = "headingData" | "paragraphData" | "linkPreviewData"

export interface BodyItem<T> extends Wix.NodeType<T> {
  _id: string;
  id?: string;
  nodes: BodyItem<Wix.BodyItemType>[];
}

export interface Heading extends Wix.BodyItem<'HEADING'> {
  headingData?: BodyItemHeadingData;
}

export interface Paragraph extends Wix.BodyItem<'PARAGRAPH'> {
  paragraphData?: BodyItemParagraphData;
}

export interface Text extends Wix.BodyItem<'TEXT'> {
  textData: BodyItemTextData;
}

export interface Blockquote extends Wix.BodyItem<'BLOCKQUOTE'> {
  blockquoteData: BlockquoteData;
}

export interface HTML extends Wix.BodyItem<'HTML'> {
  htmlData: BodyItemHTMLData;
}

export interface ListItem extends Wix.BodyItem<'LIST_ITEM'> {
  nodes: BodyItem<Wix.BodyItemType>[];
}

export interface OrderedList extends Wix.BodyItem<'ORDERED_LIST'> {
  orderedListData: BodyItemListData;
  nodes: ListItem[];
}

export interface BulletedList extends Wix.BodyItem<'BULLETED_LIST'> {
  bulletedListData: BodyItemListData;
  nodes: ListItem[];
}

export interface CodeBlock extends Wix.BodyItem<'CODE_BLOCK'> {
  codeBlockData: BodyItemCodeBlockData;
}

export interface Video extends Wix.BodyItem<'VIDEO'> {
  videoData: BodyItemVideoData;
}

export interface Image extends Wix.BodyItem<'IMAGE'> {
  imageData: BodyItemImageData;
}

export interface File extends Wix.BodyItem<'FILE'> {
  fileData: BodyItemFileData;
}

export interface LinkPreview extends Wix.BodyItem<'LINK_PREVIEW'> {
  linkPreviewData: {
    description: string;
    link: {
      url: string;
      target: string;
    };
    containerData: {
      width: {
        size: string;
      };
      alignment: TextAlignment;
      textWrap: boolean;
    };
    title: string;
    thumbnailUrl: string;
  };
}


export interface Divider extends Wix.BodyItem<'DIVIDER'> {
  dividerData: BodyItemDividerData;
}

export interface Embed extends Wix.BodyItem<'EMBED'> {
  embedData: BodyItemEmbedData;
}

export type BodyItemUnion =
  | Text
  | Paragraph
  | Heading
  | LinkPreview
  | OrderedList
  | BulletedList
  | ListItem
  | Wix.Table
  | Wix.TableCell
  | Wix.TableRow
  | Image
  | Video
  | Blockquote
  | CodeBlock
  | Embed
  | File
  | HTML
  | Divider;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MEDIA ITEM
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type MedıaItem = {
  description: string;
  slug: string;
  alt: string;
  src: string;
  title: string;
  type: string;
  settings: {
    width: number;
    height: number;
    focalPoint: Array<number>;
  };
};

// export type _Table = {
//   type: string;
//   _id: string;
//   nodes: Array<{
//     type: string;
//     _id: string;
//     nodes: Array<{
//       type: string;
//       _id: string;
//       nodes: Array<{
//         type: string;
//         _id: string;
//         nodes: Array<{
//           type: string;
//           _id: string;
//           nodes: Array<any>;
//           textData: {
//             text: string;
//             decorations: Array<any>;
//           };
//         }>;
//         paragraphData: {
//         };
//       }>;
//       tableCellData: {
//       };
//     }>;
//   }>;

// };
