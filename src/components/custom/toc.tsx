/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import { useState, useEffect, memo, useRef, createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
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

export function TOC({ body: data, maxHeadingLevel = 4 }) {
  const extractHeadings = (nodes) => {
    const headingGroups = [];
    let currentList = [];
    let currentLevel = 0;

    nodes.forEach((node) => {
      if (node.type === 'HEADING') {
        const headingLevel = node.headingData.level;

        // Limit heading level
        if (headingLevel > maxHeadingLevel) return;

        // Create the list item
        const nodeId = slugify(node.nodes.map((i) => i.textData.text).join('-'));
        const content = node.nodes.map((i) => i.textData.text);

        currentList.push(
          renderToStaticMarkup(
            <li key={nodeId} data-heading-level={headingLevel}>
              <Link id={node.id} href={`#${nodeId}`}>
                {content}
              </Link>
            </li>
          )
        );
      }
    });

    headingGroups.push(currentList.join(' '));

    return headingGroups;
  };

  const headingsMarkup = extractHeadings(data.nodes);

  return (
    <Card id="toc-box">
      <div id="toc-title">Table of Contents</div>
      <div id="toc-body">
        {headingsMarkup.map((group, index) => (
          // We'll render the group as a single <ul>
          <ul dangerouslySetInnerHTML={{ __html: group }} key={`toc-h-${index}`} />
        ))}
      </div>
    </Card>
  );
}
