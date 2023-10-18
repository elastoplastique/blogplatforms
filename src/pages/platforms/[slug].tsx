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
  queryReferencedItems,
} from '@/lib/wix/cms';
import { RichContent } from '@/lib/wix/cms/components/rich-content';
import { removeTrailing } from '@/lib/utils/remove-trailing-slash';
import { PlatformMedia } from '@/components/custom/platform-media';

type Props = {
  platform: PlatformNode;
  platformFeatures: PlatformFeatureNode[];
  platformComparativeFeatures: PlatformComparativeFeatureNode[];
  platformAccounts: AccountsNode;
  refItems: any[];
};

export default function PlatformPage({ platform, platformFeatures, platformComparativeFeatures, platformAccounts }: Props) {
  // console.log('[slug] page: ', platform.body);
  // console.log("[slug] page platformComparativeFeatures: ", platformComparativeFeatures)
  // console.log("[slug] page platformFeatures: ", platformFeatures)
  const features = useMemo(() => platformFeatures.filter((pf: Wix.PlatformFeatureNode) => pf.featureData?.title), [platform.slug]);
  const comparativeFeatures = useMemo(
    () => platformComparativeFeatures.filter((pcf: Wix.PlatformComparativeFeatureNode) => pcf.featureData?.title),
    [platform.slug]
  );

  // console.log("[slug] page platformFeatures: ", platform)
  // console.log("[slug] page platformResourceLinks: ", platformResourceLinks)
  // console.log("[slug] page progressFeatures: ", platform.progressFeatures)
  // console.log("[slug] page accounts: ", platform.accounts)

  return (
    <PageLayout
      metaTitle={`Best Blogging Site: ${platform.title} | BlogPlatforms.app`}
      metaDescription={platform.description}
      canonical={`${removeTrailing(META.CANONICAL)}/${ROUTES.PLATFORMS_DIRECTORY.path}/${removeTrailing(platform.slug)}`}
    >
      <Container size="3" className="w-full">
        <Card id="page-card" className="w-full h-full relative flex flex-col justify-start min-w-full" mt={'2'} size="5" variant="surface">
          <Flex width="100%" justify="center">
            <Breadcrumb links={[{ name: platform.title, href: `/platforms/${platform.slug}`, current: true }]} />
          </Flex>

          {platform.cover ? (
            <AspectRatio ratio={16 / 9} style={{ width: '100%', height: '100%', minHeight: 200, position: 'relative' }}>
              <img src={platform.cover} alt={platform.title} />
            </AspectRatio>
          ) : (
            <img src={platform.logo!} alt={platform.title} width={64} height={64} style={{ borderRadius: '100%', top: '26px' }} />
          )}

          <motion.div className="relative min-w-full rounded-3xl flex flex-col justify-center items-center min-h-32 my-8">
            <Heading as="h1" size="6" className="tracking-tight text-center !font-semi-bold !mx-8 text-inherit pt-2">
              <span className="!text-lg block font-medium !mb-2">
                <Link href="/">Best Blog Platforms</Link>
              </span>
              <span className="!text-8xl block !tracking-tighter uppercase">{platform.title}</span>
            </Heading>

            {/* SOCIAL ACCOUNTS  */}
            {/* <SocialAccounts accounts={platform.accounts} platformTitle={platform.title} /> */}
            <motion.a
              href={platform.url}
              className="intense-shadow mt-6 mb-12"
              rel="noopener nofollow"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{
                borderRadius: 12,
                backgroundColor: 'black',
                color: 'white',
                padding: '16px 64px',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
              target="_blank"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
            >
              Visit {platform.title}
            </motion.a>
          </motion.div>

          <Separator className="my-8" size="4" />

          {/* MEDIA */}
          {/* {platform.media && platform.media.length > 0 && <PlatformMedia media={platform.media} />} */}

          {/* CONTENT */}
          <Flex direction="column" justify="start" align="stretch">
            <Text as="p" align="center" weight="medium" size="5">
              {platform.description}
            </Text>

            <Flex direction="column" justify="start" align="stretch" my="8">
              {platform.body && <RichContent body={platform.body} />}
            </Flex>

            {/* AUDIENCE */}
            <Audience title={platform.title} audience_text={(platform.audience || []).join(',') || ''} />

            {/* PROGRESS FEATURES */}
            {comparativeFeatures && comparativeFeatures.length > 0 && (
              <ProgressFeatures platformName={platform.title} platformComparativeFeatures={comparativeFeatures} />
            )}

            {/* FEATURES */}
            {platformFeatures.length > 0 && <PlatformFeatures platformName={platform.title} platformFeatures={platformFeatures} />}

            {/* PROS CONS */}
            <ProsCons platform={platform} id={`${platform.slug}-platform-pros-cons`} />

            {/* RESOURCES */}
            {platform.resources && <PlatformResources platformTitle={platform.title} body={platform.resources} />}

            <motion.a
              href={platform.url}
              className="mt-4 mb-12"
              rel="noopener nofollow"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{
                borderRadius: 24,
                backgroundColor: '#533BD6',
                color: 'white',
                padding: '16px 0',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
              target="_blank"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
            >
              Visit {platform.title}
            </motion.a>
          </Flex>
        </Card>
      </Container>
    </PageLayout>
  );
}

export const getStaticProps = async ({ params: { slug } }: { params: { slug: string } }) => {
  const platform = await getPlatform(slug);
  const platformFeatures = await getPlatformFeatures(platform._id);
  const platformComparativeFeatures = await getPlatformComparativeFeatures(platform._id);
  const platformAccounts = await getPlatformAccounts(platform.slug);

  return {
    props: {
      platform,
      platformFeatures,
      platformComparativeFeatures,
      platformAccounts,
    },
  };
};

export const getStaticPaths = async () => {
  const platformNames = await getPlatformSlugs();
  const paths = platformNames.map((p) => ({ params: { slug: p } }));
  return {
    paths,
    fallback: false,
  };
};
