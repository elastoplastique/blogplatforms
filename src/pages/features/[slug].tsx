/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useMemo } from 'react';
import { PageLayout } from '@/components/layout/page-layout';
import { AspectRatio, Badge, Heading, Text, Flex, Card, Container, Separator, Grid, Button } from '@/components/ui';
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
  getPlatforms,
  getPlatformComparativeFeatures,
  getPlatformFeatures,
  getPlatformAccounts,
  getPlatformsFeatures,
  getFeature,
  getFeatureSlugs,
  queryItems,
  getPost,
  queryReferencedItems,
} from '@/lib/wix/cms';
import { RichContent } from '@/lib/wix/cms/components/rich-content';
import { removeTrailing } from '@/lib/utils/remove-trailing-slash';
import { PlatformMedia } from '@/components/custom/platform-media';
import { AnimatePresence } from 'framer-motion';
import { ListCardCover } from '@/components/compound/list-card-cover';
import { COLLECTIONS } from '@/lib/wix/cms/cms';

type Props = {
  feature: Wix.FeatureNode;
  platforms: PlatformNode[];
};

export default function PlatformPage({ feature, platforms }: Props) {
  // console.log('[slug] page: ', platforms);
  // console.log('[slug] page: ', feature);

  return (
    <PageLayout
      metaTitle={`${feature.header} | BlogPlatforms.app`}
      metaDescription={feature.description}
      canonical={`${removeTrailing(META.CANONICAL)}/${ROUTES.FEATURES_DIRECTORY.path}/${removeTrailing(feature.slug)}`}
    >
      <Container size="4" className="w-full" id="feature-page">
        <Card id="page-card" className="w-full h-full relative flex flex-col justify-start min-w-full" mt={'2'} size="4">
          <motion.div className="relative min-w-full rounded-3xl flex flex-col justify-center items-center min-h-32 my-8">
            <Heading as="h1" className="tracking-tight text-center !font-semi-bold text-inherit pt-2 !text-4xl md:!text-6xl" style={{maxWidth:640}}>
              {feature.header}
            </Heading>
            <Heading
              as="h2"
              size={{
                initial: '4',
                sm: '5',
                md: '6',
              }}
              className="tracking-tight text-center !font-regular text-inherit pt-8 serif my-6"
            >
              The blog platforms that support {feature.title} feature.
            </Heading>
          </motion.div>
          <Flex width="100%" justify="center">
            <Breadcrumb
              links={[
                { name: 'Features', href: `/features`, current: false, title: 'Explore Blog Platforms by Features' },
                { name: feature.title, href: `/features/${feature.slug}`, current: true },
              ]}
            />
          </Flex>
          {/* DESCRIPTION  */}
          <Flex direction="column" justify="start" align="center" className="w-full">
            <Flex direction="column" justify="start" align="center" className="max-w-[80ch]">
              {feature.body ? (
                <RichContent body={feature.body} />
              ) : (
                <Text as="p" align="center" weight="medium" size="5">
                  {feature.description}
                </Text>
              )}
            </Flex>
          </Flex>
          <Separator className="my-8" size="4" />

          {/* MEDIA */}
          {/* {platform.media && platform.media.length > 0 && <PlatformMedia media={platform.media} />} */}

          <Flex
            direction={{
              initial: 'column',
              sm: 'row',
              md: 'row',
            }}
            align="stretch"
            className="min-w-full"
          >
            {/* <Flex direction="row" align="stretch" grow="0" shrink="1" id="feature-box">

          </Flex> */}
            <Flex direction="column" align="stretch" grow="1" id="list-box">
              <Grid
                width="100%"
                asChild
                columns={{
                  initial: '1',
                  sm: '2',
                  md: '2',
                  lg: '2',
                }}
                style={{ minHeight: '40vh', marginBottom: '30vh' }}
                p="1"
              >
                <motion.ul layout>
                  <AnimatePresence>
                    {platforms.map((platform) => (
                      <motion.li
                        layout
                        key={platform.slug}
                        className="relative z-0 min-h-120 m-4 flex flex-col items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ easings: 'linear', duration: 0.3 }}
                      >
                        <ListCardCover platform={platform} />
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </motion.ul>
              </Grid>
            </Flex>
          </Flex>
        </Card>
      </Container>
    </PageLayout>
  );
}

export const getStaticProps = async ({ params: { slug } }: { params: { slug: string } }) => {
  const feature = await getFeature(slug);
  // console.log("slug", slug, feature.slug)
  const options = {
    dataCollectionId: COLLECTIONS.PLATFORMS_FEATURES,
    eq: ['feature', feature._id],
    includeReferencedItems: ['platform', 'feature'],
  };
  const allPlatformsFeatures = await queryItems(options);
  // console.log("queryItems", allPlatformsFeatures)
  // filter all the platforms that have this feature
  const platformsFeatures = allPlatformsFeatures.filter((pf) => pf?.feature?.slug === feature.slug);
  // console.log("\n\nplatformsFeature", platformsFeatures)
  const platforms = platformsFeatures.map((pf) => pf.platform);
  // console.log("\n\platforms", platforms)

  // const allPlatforms = await getPlatforms();
  // const platforms = allPlatforms.filter((p) => platformIds.includes(p._id));
  // console.log("platforms", platforms)
  // console.log("platforms", feature)

  return {
    props: {
      feature,
      platforms,
    },
  };
};

export const getStaticPaths = async () => {
  const featureSlugs = await getFeatureSlugs();
  const paths = featureSlugs.map((p) => ({ params: { slug: p } }));
  return {
    paths,
    fallback: false,
  };
};
