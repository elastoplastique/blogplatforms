/* eslint-disable @next/next/no-img-element */
import React, { useMemo } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { PageLayout } from '@/components/layout/page-layout';
import { Flex, Card, Container } from '@radix-ui/themes';
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/ui/typography';
import { motion } from 'framer-motion';
import { Breadcrumb } from '@/components/compound/breadcrumb';
import { ROUTES } from '@/constants/routes';
import { META } from '@/constants/meta';
import { getPostSlugs, getPost } from '@/lib/wix/cms';
//import { RichContent } from '@/lib/wix/cms/components/rich-content';
import { removeTrailing } from '@/lib/utils/remove-trailing-slash';
import { createWixStaticUrl } from '@/lib/wix/utils/create-url';
// import { externalImageLoader } from '@/lib/utils/external-image-loader';
import { generateArticle } from '@/lib/rich-data/article';
import type { ArticleRichDataInput } from '@/lib/rich-data/article';
import dynamic from 'next/dynamic';
import { TOC } from '@/components/custom/toc';
import { ScrollTop } from '@/components/custom/scroll-top';

type Props = {
  slug: string;
  title: string;
  description: string;
  _createdDate: any;
  _updatedDate: any;
  cover: string;
  body: string;
  toc: string;
  relatedPosts: string;
  richData?: ArticleRichDataInput;
  keywords?: string;
  canonical?: string;
};

// @ts-ignore
const RelatedPosts = dynamic(() => import('../../components/custom/related-posts').then((mod) => mod.RelatedPosts), { ssr: true });
const RichContent = dynamic(() => import('../../lib/wix/cms/components/rich-content').then((mod) => mod.RichContent), { ssr: true });
export default function BlogPostPage({ slug, title, description, cover, toc, body, relatedPosts, richData, keywords, canonical }: Props) {
  return (
    <PageLayout
      metaTitle={`${title} | BloggingPlatforms.app`}
      metaDescription={description}
      canonical={canonical}
      image={cover}
      keywords={keywords}
      richData={richData}
    >
      <Container
        size={{
          initial: '2',
          md: '3',
          lg: '3',
        }}
        className="w-full !md:px-16"
      >
        <div className="post-page header-blur"></div>
        <Card
          id="page-card"
          className="w-full h-full relative flex flex-col justify-start min-w-full"
          mt={'2'}
          size={{
            initial: '1',
            sm: '3',
            md: '5',
            lg: '5',
          }}
          variant="surface"
        >
          <Flex width="100%" justify="center">
            <Breadcrumb
              links={[
                // { name: 'Blog', href: `/blog`, current: false },
                { name: title, href: `/blog/${slug}`, current: true, truncate: title.length > 30 },
              ]}
            />
          </Flex>
          <motion.div className="relative min-w-full rounded-3xl flex flex-col justify-center items-center min-h-32 !mt-10">
            <h1 className="tracking-tight text-center !font-semi-bold sm:mx-8 text-5xl md:text-5xl lg:text-7xl pt-12 mb-8">{title}</h1>
            
            <Text as="p" align="center" weight="medium" size="5" my="9" className="post-description">
              {description}
            </Text>
          </motion.div>

          <Separator />

          {/* <PostCover title={title} src={createWixStaticUrl(cover!)} /> */}
          {/* MEDIA */}
          {/* {platform.media && platform.media.length > 0 && <PlatformMedia media={platform.media} />} */}

          {/* TABLE OF CONTENTS */}
          <div className="mt-32 toc flex flex-col justify-start items-stretch" dangerouslySetInnerHTML={{ __html: toc }} />

          {/* CONTENT */}
          <article className="content-auto flex flex-col justify-start items-stretch" dangerouslySetInnerHTML={{ __html: body }} />

          {relatedPosts && <section dangerouslySetInnerHTML={{ __html: relatedPosts }} />}
        </Card>
        <ScrollTop />
      </Container>
    </PageLayout>
  );
}

export const getStaticProps = async ({ params: { slug } }: { params: { slug: string } }) => {
  const post = await getPost(slug);
  const mentions = post?.platforms
    ? post?.platforms.map(
        (p) =>
          ({
            type: 'Thing',
            name: p.title,
            sameAs: p.url,
          }) as unknown as RichData.SameAsType
      )
    : [];
  if (post?.mentions && post?.mentions.length > 0) {
    mentions.concat(post?.mentions);
  }
  const body = renderToStaticMarkup(<RichContent body={post.body!} contentId={slug} />);
  const relatedPosts = renderToStaticMarkup(<RelatedPosts posts={post?.relatedPosts!} />);
  const toc = renderToStaticMarkup(<TOC body={post.body!} />);
  const richData = generateArticle({
    title: post.title!,
    description: post.description!,
    image: createWixStaticUrl(post.cover!),
    ...(post?.questions && { questions: post.questions }),
    url: `${removeTrailing(META.CANONICAL)}${ROUTES.BLOG_POST_DIRECTORY.path}/${removeTrailing(slug)}`,
    ...(post?.about && { about: post.about }),
    ...(mentions && mentions.length && { mentions }),
    keywords: post.keywords ? post.keywords : '',
    datePublished: post._createdDate!.$date!,
    dateModified: post._updatedDate!.$date!,
  }) as unknown as ArticleRichDataInput;
  return {
    props: {
      body,
      toc,

      cover: createWixStaticUrl(post.cover!),
      description: post.description,
      slug: post.slug,
      title: post.title,
      keywords: post.keywords ? post.keywords : {},
      richData,
      canonical: `${removeTrailing(META.CANONICAL)}${ROUTES.BLOG_POST_DIRECTORY.path}/${removeTrailing(slug)}`,
      _createdDate: post._createdDate,
      _updatedDate: post._updatedDate,
      ...(relatedPosts && { relatedPosts }),
      // ...(post?.about && { about: post.about }),
      // ...(mentions && { mentions }),
      // ...(post?.questions && { questions: post.questions }),
    },
  };
};

export const getStaticPaths = async () => {
  const postSlugs = await getPostSlugs();
  const paths = postSlugs.map((p) => ({ params: { slug: p } }));
  return {
    paths,
    fallback: false,
  };
};
