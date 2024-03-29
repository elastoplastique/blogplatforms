/* eslint-disable @next/next/no-img-element */
import React, { useMemo, useEffect, useRef } from 'react';
import { PageLayout } from '@/components/layout/page-layout';
import { Heading, Text, Flex, Grid, Card, Container, Separator } from '@/components/ui';
import { motion } from 'framer-motion';
import { Breadcrumb } from '@/components/compound/breadcrumb';
import { ROUTES } from '@/constants/routes';
import { META } from '@/constants/meta';
import {
  getPostSlugs,
  getPost,
} from '@/lib/wix/cms';
import { RichContent } from '@/lib/wix/cms/components/rich-content';
import { removeTrailing } from '@/lib/utils/remove-trailing-slash';
import { createWixStaticUrl } from '@/lib/wix/utils/create-url';
import { externalImageLoader } from '@/lib/utils/external-image-loader';
import { generateArticle } from '@/lib/rich-data/article';
import type { ArticleRichDataInput } from '@/lib/rich-data/article';
import dynamic from 'next/dynamic'

type Props = {
  post: Wix.PostNode;
};

// @ts-ignore
const RelatedPosts = dynamic(() =>
  import('../../components/custom/related-posts').then((mod) => mod.RelatedPosts),
  { ssr: false }
)
const PostCover = dynamic(() =>
  import('../../components/custom/post-cover').then((mod) => mod.PostCover),
  { ssr: false }
)
export default function BlogPostPage({ post }: Props) {
  const haveRelatedPosts = useMemo(() => post.relatedPosts && post.relatedPosts.length > 0, [post.relatedPosts]);
  const haveCover = useMemo(() => post.cover, [post.cover]);

  const mentions = useMemo(() => {
    const m = post?.platforms!.map(
      (p) =>
        ({
          type: 'Thing',
          name: p.title,
          sameAs: p.url,
        }) as unknown as RichData.SameAsType
    );
    if (post.mentions && post.mentions.length > 0) {
      return m.concat(post.mentions);
    }
    return m;
  }, [post.platforms]);


  console.log(post)
  return (
    <PageLayout
      metaTitle={`${post.title} | BloggingPlatforms.app`}
      metaDescription={post.description}
      canonical={`${removeTrailing(META.CANONICAL)}${ROUTES.BLOG_POST_DIRECTORY.path}/${removeTrailing(post.slug)}`}
      image={createWixStaticUrl(post.cover!)}
      keywords={post.keywords}
      richData={
        generateArticle({
          title: post.title!,
          description: post.description!,
          image: createWixStaticUrl(post.cover!),
          questions: post.questions,
          url: `${removeTrailing(META.CANONICAL)}${ROUTES.BLOG_POST_DIRECTORY.path}/${removeTrailing(post.slug)}`,
          ...(post.about && { about: post.about }),
          ...(mentions && mentions.length && { mentions }),
          keywords: post?.keywords,
          datePublished: post._createdDate!.$date!,
          dateModified: post._updatedDate!.$date!,
        }) as unknown as ArticleRichDataInput
      }
    >
      <Container size={{
        initial: '2',
        md: '3',
        lg: '3',
      }} className="w-full !md:px-16">
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
                { name: 'Blog', href: `/blog`, current: false },
                { name: post.title, href: `/blog/${post.slug}`, current: true, truncate: post.title.length > 20 },
              ]}
            />
          </Flex>
          <motion.div className="relative min-w-full rounded-3xl flex flex-col justify-center items-center min-h-32 !mt-10">
            <h1 className="tracking-tight text-center !font-semi-bold sm:mx-8 text-6xl md:text-6xl lg:text-7xl pt-2 mb-8">
              {post.title}
            </h1>
            <Text as="p" align="center" weight="medium" size="4" my="9">
              {post.description}
            </Text>
          </motion.div>
          {/** @ts-ignore */}
          <the-fold></the-fold>

          <Separator className="my-12 mb-40" size="4" />

          {haveCover && (
            <PostCover title={post.title} src={createWixStaticUrl(post.cover!)} />
          )}
          {/* MEDIA */}
          {/* {platform.media && platform.media.length > 0 && <PlatformMedia media={platform.media} />} */}

          {/* CONTENT */}
          <article className="content-auto">
            <Flex direction="column" justify="start" align="stretch">


              <Flex direction="column" justify="start" align="stretch" my="4">
                <main>
                  {post.body && <RichContent body={post.body} contentId={post.slug} />}
                </main>
              </Flex>
            </Flex>
          </article>


          { haveRelatedPosts && <RelatedPosts posts={post.relatedPosts!} />}

        </Card>
      </Container>
    </PageLayout>
  );
}

export const getStaticProps = async ({ params: { slug } }: { params: { slug: string } }) => {
  const post = await getPost(slug);
  return {
    props: {
      post,
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
