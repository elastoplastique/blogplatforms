/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, memo } from 'react';
import type { ReactNode } from 'react';
import { AspectRatio, Link, Heading, Text, Flex, Card, Inset, Strong, Em, Separator } from '@/components/ui';
import {
  Heading as HeadingI,
  Paragraph as ParagraphI,
  Text as TextI,
  Blockquote as BlockquoteI,
  CodeBlock as CodeBlockI,
  Video as VideoI,
  Image as ImageI,
  File as FileI,
  LinkPreview as LinkPreviewI,
  Embed as EmbedI,
  BodyItem,
  Decoration,
  DecorationType,
  BodyItemUnion,
  BodyItemType,
  TextDecorationUnion,
  LinkDecoration,
  ColorDecoration,
  BoldDecoration,
  ItalicDecoration,
  BulletedList,
  OrderedList,
  ListItem,
} from '@/types/wix/rich-content';
import { IMAGE_WIDTH, IMAGE_HEIGHT, THUMBNAIL_FACTOR } from '@/constants/image';
import { media } from '@wix/sdk';
import { ReactElement } from 'react';
import { createWixStaticUrl, createWixStaticVideoUrl } from '@/lib/wix/utils/create-url';
import { slugify } from '@/lib/utils/slugify';

export const TOC = memo(
  ({ body }: { body: { nodes: Wix.BodyItemUnion[]; metadata?: Wix.BodyMetadata } }) => {
    return (
      <Flex width="100%" direction="column" id="toc-content">
        {body.nodes.map((node: BodyItemUnion) => (
          <WixNode node={node} key={node._id} />
        ))}
      </Flex>
    );
  },
  (prevProps, nextProps) => prevProps.body?.metadata?._id === nextProps.body?.metadata?._id
);

function WixHeading({ node }: { node: Wix.Heading }) {
  function getLevel(node: HeadingI) {
    switch (node.headingData!.level) {
      case 1:
        return 'h1';
      case 2:
        return 'h2';
      case 3:
        return 'h3';
      case 4:
        return 'h4';
      case 5:
        return 'h5';
      case 6:
        return 'h6';
      default:
        return 'h2';
    }
  }
  console.log('heading', node);
  return (node.nodes as BodyItemUnion[]).map((innerNode) => <WixNode node={innerNode} key={innerNode._id} />);
}

function WixText({ node }: { node: Wix.Text }) {
  function getText(node: TextI) {
    let text = node.textData.text;
    node.nodes.forEach((innerNode: any) => {
      text += innerNode.textData.text;
    });
    return text;
  }
  return getText(node);
}

function WixNode({ node }: { node: BodyItemUnion }) {
  if (node.type === 'HEADING') {
    return <WixHeading node={node} />;
  }
  if (node.type === 'TEXT') {
    return <WixText node={node} />;
  }
}
