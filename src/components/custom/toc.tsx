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
              <Link id={node.id}  href={`#${nodeId}`}>
                {content}
              </Link> 
            </li>
          )
        );
      }
    });

    headingGroups.push(currentList.join(' '));

    return headingGroups;
  }

  const headingsMarkup = extractHeadings(data.nodes);

  return (
    <Card id="toc-box">
      <div id="toc-title">Table of Contents</div>
      <div id="toc-body">
        {headingsMarkup.map((group, index) => (
          // We'll render the group as a single <ul>
          <ul key={index} dangerouslySetInnerHTML={{__html: group}} /> 
        ))} 
      </div>
    </Card>
  );
}





export const _TOC = memo(
  ({ body }: { body: { nodes: Wix.BodyItemUnion[]; metadata?: Wix.BodyMetadata } }) => {
    console.log("body", JSON.stringify(body))
    const tocRef = useRef<HTMLDivElement>(null);
    const tocBodyRef = useRef<any>(null);
    return (
      <Card id="toc-box" ref={tocRef}>
        <Flex width="100%" direction="row" id="toc-title" className="text-center">
          Table of Contents
        </Flex>
        <Flex width="100%" direction="column" align="stretch" id="toc-body" className="text-center">
          <ul ref={tocBodyRef}>
            {body.nodes.map((inode: BodyItemUnion) => {
                if (inode.type === 'HEADING') {
                  const headerLevel =  inode.headingData!.level
                  return <WixHeading node={inode} />;
                }
                if (inode.type === 'TEXT') {
                  return <WixText node={inode} />;
                }
            }
            )}
          </ul>
        </Flex>
      </Card>
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
  function getText(node: TextI) {
    let text = node.textData.text;
    node.nodes.forEach((innerNode: any) => {
      text += innerNode.textData.text;
    });
    return text;
  }
  const key = slugify(node.nodes.map((i: any) => i.textData.text).join('-')) + '-' + getLevel(node);
  return (
    <li id={slugify(node.nodes.map((i: any) => i.textData.text).join('-'))} key={key} className="cms-toc-h" data-toc-level={node.headingData!.level}>
        {(node.nodes as BodyItemUnion[]).map((innerNode, ix) => (
          <WixNode node={innerNode} key={innerNode._id || innerNode.id || key} />
        ))}
    </li>
  );
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

function WixNode({ node, level }: { node: BodyItemUnion, level?: number}) {
  if (node.type === 'HEADING') {
    const headerLevel =  node.headingData!.level
    return <WixHeading node={node} />;
  }
  if (node.type === 'TEXT') {
    return <WixText node={node} />;
  }
}
