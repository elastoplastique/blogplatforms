/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useMemo, memo, useId, Fragment } from 'react';
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
  ListItem, CodeBlock,
} from '@/types/wix/rich-content';
import { IMAGE_WIDTH, IMAGE_HEIGHT, THUMBNAIL_FACTOR } from '@/constants/image';
import { media } from '@wix/sdk';
import { ReactElement } from 'react';
import { createWixStaticUrl, createWixStaticVideoUrl } from '@/lib/wix/utils/create-url';
import { externalImageLoader } from '@/lib/utils/external-image-loader';
import { slugify } from '@/lib/utils/slugify';
import Image from 'next/image';
import { useWixModules } from '@wix/sdk-react';
import { files } from '@wix/media';
import { wixClient } from '@/lib/wix/provider/client-provider';

const THUMB_HEIGHT = IMAGE_HEIGHT * THUMBNAIL_FACTOR;
const THUMB_WIDTH = IMAGE_WIDTH * THUMBNAIL_FACTOR;

export const RichContent = memo(
  ({ body, contentId }: { body: { nodes: Wix.BodyItemUnion[]; metadata?: Wix.BodyMetadata }; contentId: string }) => {
    return (
      <Flex width="100%" direction="column" id="rich-content">
        {body.nodes.map((node: BodyItemUnion) => (
          <WixNode node={node} key={node.id || node._id} />
        ))}
      </Flex>
    );
  },
  (prevProps, nextProps) => prevProps.contentId === nextProps.contentId
);

function domainTransformer(url: string) {
  if (url.includes('blogplatforms.app')) {
    return url.replace('blogplatforms', 'bloggingplatforms');
  } else {
    return url;
  }
}

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
  const key = slugify(node.nodes.map((i: any) => i.textData.text).join('-')) + "-" + getLevel(node)
  return (
    <Heading 
      as={getLevel(node)} 
      id={slugify(node.nodes.map((i: any) => i.textData.text).join('-'))} 
      key={key} 
      className="cms-rich-content cms-img">
      <>
        {(node.nodes as BodyItemUnion[]).map((innerNode, ix) => (
          <WixNode node={innerNode} key={innerNode._id || innerNode.id} t={`${ix}-${innerNode._id || innerNode.id || key}`}/>
        ))}
      </>
    </Heading>
  );
}

function WixParagraph({ node }: { node: Wix.Paragraph }) {
  return (
    <Text as="p" mb="2" id={node._id} className="cms-rich-content cms-p">
      <>
        {(node.nodes as BodyItemUnion[]).map((innerNode: BodyItemUnion, ix: number) => (
          <WixNode node={innerNode} key={`${ix}-${innerNode._id}`} />
        ))}
      </>
    </Text>
  );
}

function WixCodeBlock({ node }: { node: Wix.CodeBlock }) {
  return (
    <pre id={node._id} className="cms-rich-content cms-pre">
      <code className="cms-rich-content cms-code microlight">
      <>
        {(node.nodes as BodyItemUnion[]).map((innerNode: BodyItemUnion, ix: number) => (
          <WixNode node={innerNode} key={`${ix}-${innerNode._id}`} />
        ))}
      </>
        </code>
    </pre>
  );
}

function WixTextDecorated({ node }: { node: Wix.Text }) {
  const id1 = useId();
  const id2 = useId();
  const id3 = useId();
  const id4 = useId();

  // const getBoldDecoration = node.textData.decorations.find((decoration: Decoration<DecorationType>) => decoration.type === "BOLD")
  // const getColorDecoration = node.textData.decorations.find((decoration: Decoration<DecorationType>) => decoration.type === "COLOR")
  // const getItalicDecoration = node.textData.decorations.find((decoration: Decoration<DecorationType>) => decoration.type === "ITALIC")
  // const getLinkDecoration = node.textData.decorations.find((decoration: Decoration<DecorationType>) => decoration.type === "LINK")

  const LinkDecoration = ({ decoration, children }: { decoration: LinkDecoration; children: ReactNode | string }) => (
    <Link
      href={domainTransformer(decoration.linkData.link.url)}
      style={{ color: 'inherit' }}
      className="cms-rich-content cms-link"
      target={
        (decoration.linkData.link.target?.toLowerCase() === '_blank' || decoration.linkData.link.target?.toLowerCase() === 'blank') && !domainTransformer(decoration.linkData.link.url).includes("bloggingplatforms")
          ? '_blank'
          : undefined
      }
      rel={`${decoration.linkData.link.rel?.nofollow ? 'nofollow' : ''} ${decoration.linkData.link.rel?.noreferrer ? 'noreferrer' : ''}`}
      id={id1}
    >
      {children}
    </Link>
  );
  const BoldDecoration = ({ decoration, children }: { decoration: BoldDecoration; children: ReactNode | string }) => (
    <Strong className="cms-rich-content cms-strong" id={id2}>
      {children}
    </Strong>
  );
  const ItalicDecoration = ({ decoration, children }: { decoration: ItalicDecoration; children: ReactNode | string }) => (
    <em className="cms-rich-content cms-em" id={id3}>
      {children}
    </em>
  );
  const ColorDecoration = ({ decoration, children }: { decoration: ColorDecoration; children: ReactNode | string }) => (
    <span className="cms-rich-content cms-span" id={id4}>
      {children}
    </span>
  );

  const SingleDecoration = ({ decoration, children }: { decoration: TextDecorationUnion; children: ReactNode }) => {
    switch (decoration.type) {
      case 'BOLD':
        return <BoldDecoration decoration={decoration}>{children}</BoldDecoration>;
      case 'COLOR':
        return <ColorDecoration decoration={decoration}>{children}</ColorDecoration>;
      case 'ITALIC':
        return <ItalicDecoration decoration={decoration}>{children}</ItalicDecoration>;
      case 'LINK':
        return <LinkDecoration decoration={decoration}>{children}</LinkDecoration>;
      default:
        return children;
    }
  };
  // This component iterates over decorations put them the next decoration as children
  // If the decoration is the last one, it puts the text as children
  const Decorations = ({ text, decorations }: { text: string; decorations: TextDecorationUnion[] }) => {
    if (decorations.length === 0) {
      return <>{text}</>;
    } else {
      return (
        <SingleDecoration decoration={decorations[0]}>
          <Decorations text={text} decorations={decorations.slice(1)} />
        </SingleDecoration>
      );
    }
  };
  return <>{Decorations({ text: node.textData.text, decorations: node.textData.decorations })}</>;
}

function WixText({ node }: { node: Wix.Text }) {
  function getText(node: TextI) {
    let text = node.textData.text;
    text = convertBackticks(text);
    node.nodes.forEach((innerNode: any) => {
      text += innerNode.textData.text;
    });
    return text
  }
  return getText(node);
}

function WixLinkPreview({ node }: { node: Wix.LinkPreview }) {
  const isInternal =
    node.linkPreviewData.link.url.includes('blogplatforms.app') || node.linkPreviewData.link.url.includes('bloggingplatforms.app');
  return (
    <Card className="cms-rich-content cms-link-preview link-preview-card">
      <Flex direction={{ initial: 'column', sm: 'row' }} height="min-content">
        <Flex width={{ initial: '100%', sm: '100%' }} className="link-preview-thumb">
          <AspectRatio ratio={THUMB_WIDTH / THUMB_HEIGHT} className="aspect-ratio-box">
            <Image
              src={node.linkPreviewData.thumbnailUrl}
              alt={node.linkPreviewData.title}
              loader={externalImageLoader}
              fill
              // style={{
              //   display: 'block',
              //   objectFit: 'cover',
              //   width: THUMB_WIDTH,
              //   height: THUMB_HEIGHT,
              //   backgroundColor: 'var(--gray-5)',
              // }}
            />
          </AspectRatio>
        </Flex>
        <Flex direction="column" className="link-preview-content">
          <Text as="p" size="3">
            <Strong className="!text-overflow-ellipsis">{node.linkPreviewData.title}</Strong>
          </Text>
          <Text as="p" size="2" className="text-text-low-contrast">
            {node.linkPreviewData.description.slice(0, 150)} {node.linkPreviewData.description.length > 150 && '...'}
          </Text>
        </Flex>
        <a
          href={domainTransformer(node.linkPreviewData.link.url)}
          className="cover-box"
          target={isInternal ? '' : '_blank'}
          rel={isInternal ? '' : 'noopener nofollow'}
        ></a>
      </Flex>
    </Card>
  );
}

function WixListItem({ node }: { node: Wix.ListItem }) {
  return (
    <li className="cms-rich-content cms-li">
      {(node.nodes as BodyItemUnion[]).map((innerNode, ix: number) => (
        <WixNode node={innerNode} key={`list-item-${ix}-${innerNode?._id ? innerNode?._id : innerNode?.id ? innerNode?.id : 'li'}`} />
      ))}
    </li>
  );
}

function WixOrderedList({ node }: { node: Wix.OrderedList }) {
  return (
    <ol className="cms-rich-content cms-ol">
      {(node.nodes as ListItem[]).map((innerNode: ListItem, ix: number) => (
        <WixNode
          node={innerNode}
          key={`ordered-list-item-${ix}-${innerNode?._id ? innerNode?._id : innerNode?.id ? innerNode?.id : 'a'}`}
        />
      ))}
    </ol>
  );
}

function WixBulletedList({ node }: { node: Wix.BulletedList }) {
  return (
    <ul className="cms-rich-content cms-ul">
      {(node.nodes as ListItem[]).map((innerNode: ListItem, ix: number) => (
        <WixNode
          node={innerNode}
          key={`bulleted-list-item-${ix}-${innerNode?._id ? innerNode?._id : innerNode?.id ? innerNode?.id : 'bulleted'}`}
        />
      ))}
    </ul>
  );
}

function WixImage({ node }: { node: Wix.Image }) {
  const imageId = node.imageData.image.src._id || node.imageData.image.src.id!;
  const imageLink = node.imageData?.link?.url;
  return (
    <AspectRatio ratio={node.imageData.image.width / node.imageData.image.height} className="cms-rich-content cms-img">
      {imageId &&
        (imageLink ? (
          <a href={imageLink} target="_blank" title={node.imageData?.altText}>
            <Image
              loading="lazy"
              loader={externalImageLoader}
              src={createWixStaticUrl(imageId)}
              alt={node.imageData?.altText || ''}
              className="absolute top-0 left-0"
              fill
            />
          </a>
        ) : (
          <Image
            loading="lazy"
            loader={externalImageLoader}
            src={createWixStaticUrl(imageId)}
            alt={node.imageData?.altText || ''}
            className="absolute top-0 left-0"
            fill
          />
        ))}
      {}
    </AspectRatio>
  );
}

function WixVideo({ node }: { node: Wix.Video }) {
  const { generateVideoStreamingUrl } = useWixModules(files);
  const videoId = useMemo(() => node.videoData.video.src._id || node.videoData.video.src.id!, [node.id]);
  const [videoUrl, setVideoUrl] = useState<string | undefined>();

  // console.log('videoUrl', videoUrl);

  async function getVideoStreamingUrl(videoId: string) {
    try {
      const vid = videoId.replace('video/', '');
      // console.log('vid', vid);
      const videoResponse = await generateVideoStreamingUrl(vid);
      // console.log('VIDEO RESPONSE', videoResponse)
      if (videoResponse?.downloadUrl && videoResponse?.downloadUrl.url) {
        if (!videoUrl || videoUrl !== videoResponse.downloadUrl.url) {
          setVideoUrl(videoResponse.downloadUrl.url);
        }
      }
    } catch (error) {
      console.log('error', error);
      // console.log('error', error);
    }
  }

  useEffect(() => {
    if (videoId) {
      getVideoStreamingUrl(videoId);
      // console.log('videoId', videoId);
      // console.log('node', node);
      // console.log('createWixStaticVideoUrl(node.videoData.video.src._id)', createWixStaticVideoUrl(videoId));
    }
  }, [videoId]);
  if (!videoUrl) return <></>;
  return (
    <AspectRatio ratio={16 / 9} className="cms-rich-content cms-video relative">
      {videoUrl && (
        <video
          controls
          width="100%"
          src={createWixStaticVideoUrl(node.videoData.video.src._id)}
          poster={createWixStaticUrl(node.videoData.thumbnail.src._id)}
          className="absolute top-0 left-0 bottom-0 right-0 max-h-full"
        />
      )}
    </AspectRatio>
  );
}

function WixDivider({ node }: { node: Wix.Divider }) {
  return <hr className="cms-rich-content cms-hr" />;
}

function WixNode({ node }: { node: BodyItemUnion }) {
  if (node.type === 'HEADING') {
    return <WixHeading node={node} />;
  }
  if (node.type === 'PARAGRAPH') {
    return <WixParagraph node={node} />;
  }
  if (node.type === 'CODE_BLOCK') {
    return <WixCodeBlock node={node} />;
  }
  if (node.type === 'TEXT') {
    if (node.textData.decorations.length > 0 && !textHasEmptyDecoration(node)) {
      return <WixTextDecorated node={node} />;
    } else {
      return <WixText node={node} />;
    }
  }
  if (node.type === 'LINK_PREVIEW') {
    return <WixLinkPreview node={node} />;
  }
  if (node.type === 'ORDERED_LIST') {
    return <WixOrderedList node={node} />;
  }
  if (node.type === 'BULLETED_LIST') {
    return <WixBulletedList node={node} />;
  }
  if (node.type === 'LIST_ITEM') {
    return <WixListItem node={node} />;
  }
  if (node.type === 'IMAGE') {
    return <WixImage node={node} />;
  }
  if (node.type === 'VIDEO') {
    return <WixVideo node={node} />;
  }
  if (node.type === 'DIVIDER') {
    return <WixDivider node={node} />;
  } else {
    return <></>;
  }
}

function textHasEmptyDecoration(node: Wix.Text) {
  const decorations = node.textData.decorations;

  // COLOR
  const isEmptyColor = (d: TextDecorationUnion) => d.type === 'COLOR' && d?.colorData.background === '' && d?.colorData.foreground === '';

  // Empty decoration values are collected as True
  const emptyList = decorations.map((d: TextDecorationUnion) => isEmptyColor(d)).filter(Boolean);
  return emptyList.length === decorations.length;
}

function convertBackticks(text: string){
  if (text.includes("`")){
    let result = "";
    let splitted = text.split("`");
    for(let i = 0; i < splitted.length; i++){
      if (i % 2 === 0){
        result += splitted[i];
      } else {
        result += `<code>${splitted[i]}</code>`
      }
    }
    return result;
  } else {
    return text
  }
}

// function WixTextDecoration({ text, decorations }: { text: string, decorations: Decoration<DecorationType>[] }) {
//   if (node.textData === "HEADING") {
//     return <WixHeading node={node} />
//   }
//   if (node.textData === "PARAGRAPH") {
//     return <WixParagraph node={node} />
//   }
//   if (node.textData === "TEXT") {
//     return <WixText node={node} />
//   }
//   if (node.textData === "LINK_PREVIEW") {
//     return <WixLinkPreview node={node} />
//   }
//   else {
//     return (
//       <>
//         {decorations.map((decoration: Decoration<DecorationType>) => (

//       ))}
//       </>
//     )
//   }
// }
