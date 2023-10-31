/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useMemo } from 'react';
import { PageLayout } from '@/components/layout/page-layout';
import { AspectRatio, Badge, Heading, Text, Flex, Card, Container, Separator } from '@/components/ui';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { ProsCons } from '@/components/custom/pros-cons';
import Image from 'next/image';
import Link from 'next/link';
import { Audience } from '@/components/custom/audience';
import { PlatformFeatures } from '@/components/custom/platform-features';
import { PlatformResources } from '@/components/custom/platform-resources';
import { ProgressFeatures } from '@/components/custom/progress-features';
import { Breadcrumb } from '@/components/compound/breadcrumb';
import { ROUTES } from '@/constants/routes';
import { META } from '@/constants/meta';
import { SocialAccounts } from '@/components/custom/social-accounts';
import {
  getPlatformSlugs,
  getPlatform,
  getPlatformComparativeFeatures,
  getPlatformFeatures,
  getPlatformAccounts,
  getPostSlugs,
  getPost,
  queryReferencedItems,
} from '@/lib/wix/cms';
import { RichContent } from '@/lib/wix/cms/components/rich-content';
import { removeTrailing } from '@/lib/utils/remove-trailing-slash';
import { PlatformMedia } from '@/components/custom/platform-media';
import { createWixStaticUrl } from '@/lib/wix/utils/create-url';
import { externalImageLoader } from '@/lib/utils/external-image-loader';

type Props = {
  post: Wix.PostNode;
};

export default function PlatformPage({ post }: Props) {
  return (
    <PageLayout
      metaTitle={`${post.title} | BlogPlatforms.app`}
      metaDescription={post.description}
      canonical={`${removeTrailing(META.CANONICAL)}/${ROUTES.BLOG_POST_DIRECTORY.path}/${removeTrailing(post.slug)}`}
      image={createWixStaticUrl(post.cover!)}
    >
      <Container size="3" className="w-full">
        <Card id="page-card" className="w-full h-full relative flex flex-col justify-start min-w-full" mt={'2'} size="3" variant="surface">
          <Flex width="100%" justify="center">
            <Breadcrumb
              links={[
                { name: 'Blog', href: `/blog`, current: false },
                { name: post.title, href: `/blog/${post.slug}`, current: true, truncate: true },
              ]}
            />
          </Flex>

          {post.cover && (
            <AspectRatio ratio={16 / 9} style={{ width: '100%', height: '100%', minHeight: 200, position: 'relative' }}>
              <Image
                src={createWixStaticUrl(post.cover)}
                alt={post.title}
                className="rounded-lg"
                loader={externalImageLoader}
                fill
                priority
              />
            </AspectRatio>
          )}

          <motion.div className="relative min-w-full rounded-3xl flex flex-col justify-center items-center min-h-32 !mt-20">
            <Heading as="h1" size="6" className="tracking-tight text-center !font-semi-bold !mx-8 text-inherit pt-2">
              <span className="text-4xl sm:text-6xl block !tracking-tighter">{post.title}</span>
            </Heading>
          </motion.div>

          <Separator className="my-8" size="4" />

          {/* MEDIA */}
          {/* {platform.media && platform.media.length > 0 && <PlatformMedia media={platform.media} />} */}

          {/* CONTENT */}
          <Flex direction="column" justify="start" align="stretch">
            <Text as="p" align="center" weight="medium" size="4">
              {post.description}
            </Text>

            <Flex direction="column" justify="start" align="stretch" my="8">
              {post.body && <RichContent body={post.body} />}
            </Flex>
          </Flex>
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
