import React, { useEffect, useState } from 'react';
import { getPathsOfStaticPaths, getPostContentFromSlug } from '@/lib/server/utils.server';
import { PageLayout } from '@/components/layout/page-layout';
import {
  AspectRatio,
  Badge,
  Box,
  Heading,
  Text,
  Flex,
  Card,
  Container,
  Separator,
} from '@/components/ui';
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

type Props = {
  frontMatter: FrontMatter;
  content: string;
};

export default function PostPage({ frontMatter, content }: Props) {
  // console.log("[slug] page: ", platform)
  // console.log("[slug] page platformFeatures: ", platformFeatures)
  // console.log("[slug] page platformResourceLinks: ", platformResourceLinks)
  // console.log("[slug] page progressFeatures: ", platform.progressFeatures)
  console.log('[slug] post page content: ', content);
  console.log('[slug] post page frontmatter: ', frontMatter);

  return (
    <PageLayout
      metaTitle={`Best Blogging Site: ${frontMatter.title} | BlogPlatforms.app`}
      metaDescription={frontMatter.description}
      canonical={`${META.CANONICAL}/${ROUTES.BLOG_POST_DIRECTORY.path}/${frontMatter.slug}`}
    >
      <Container size="3" className="w-full">
        <Card
          id="page-card"
          className="w-full h-full relative flex flex-col justify-start min-w-full"
          mt={'2'}
          mb="9"
          size="5"
          variant="surface"
        >
          {frontMatter.cover && (
            <AspectRatio
              ratio={16 / 9}
              style={{
                width: '100%',
                height: '100%',
                minHeight: 200,
                position: 'relative',
                borderRadius: 12,
                overflow: 'hidden',
              }}
            >
              <Image src={frontMatter.cover} alt={frontMatter.title} fill />
            </AspectRatio>
          )}

          <motion.div className="relative min-w-full rounded-3xl flex flex-col justify-center items-center min-h-32 my-16">
            <Heading
              as="h1"
              size="6"
              className="tracking-tight text-center !mx-8 text-inherit pt-2"
            >
              <span
                className="!text-6xl block !tracking-tighter"
                style={{ letterSpacing: '-0.03em', fontWeight: 'normal' }}
              >
                {frontMatter.title}
              </span>
            </Heading>
          </motion.div>

          <Separator className="my-8" size="4" />

          {/* CONTENT */}
          <Flex direction="column" justify="start" align="stretch">
            <Text align="center" size="6" className="serif">
              {frontMatter.description}
            </Text>

            <Flex direction="column" justify="start" align="stretch" my="8">
              {content && (
                <article
                  id="post"
                  className="leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              )}
            </Flex>
          </Flex>
        </Card>
      </Container>
    </PageLayout>
  );
}

export const getStaticProps = async ({ params: { slug } }: { params: { slug: string } }) => {
  console.log('slug: ', slug);
  const { frontMatter, content } = getPostContentFromSlug(slug);
  return {
    props: {
      frontMatter,
      content,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getPathsOfStaticPaths();
  console.log('paths: ', paths);
  return {
    paths,
    fallback: false,
  };
};
