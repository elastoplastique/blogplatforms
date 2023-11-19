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
import { getPlatformsFeatures, getFeature, getFeatures, getFeatureSlugs, queryItems, getPost, queryReferencedItems } from '@/lib/wix/cms';
import { RichContent } from '@/lib/wix/cms/components/rich-content';
import { removeTrailing } from '@/lib/utils/remove-trailing-slash';
import { COLLECTIONS } from '@/lib/wix/cms/cms';
import { createWixStaticUrl } from '@/lib/wix/utils/create-url';
import { externalImageLoader } from '@/lib/utils/external-image-loader';
import { PlatformsGridView } from '@/components/views/platforms-grid-view';
import { FilterFeatureView } from '@/components/views/feature-filter-view';

import { useRouter } from 'next/router';
import { FilterMenu } from '@/components/compound/filter-menu';
import { FilterDialogMenu } from '@/components/compound/filter-dialog-menu';
import { useFilters } from '@/lib/state/filters';
import { AUDIENCES } from '@/constants/audiences';
import { FILTER_FEATURE_LABEL, FILTER_AUDIENCE_LABEL } from '@/constants/content';
import decoreative from '/public/assets/decorative/blurry2.svg';
import { DEFAULT_PLATFORMS_LOADING_PARAMS } from '@/constants/settings';
import { FeatureInfoView } from '@/components/views/feature-info-view';
type Props = {
  feature: Wix.FeatureNode;
  platforms: PlatformNode[];
  features: Wix.FeatureNode[];
  platformFeatures: PlatformFeatureNode[];
};

export default function FeaturePage(props: Props) {
  const router = useRouter();
  const routeSlug = router.asPath.split('/')[router.asPath.split('/').length - 1];

  // Filter Store
  const setPlatforms = useFilters((state) => state.setPlatforms);
  const setFeatures = useFilters((state) => state.setFeatures);
  const addOptionSet = useFilters((state) => state.addOptionSet);
  const selecteds = useFilters((state) => state.selecteds);

  const filteredPlatforms = useFilters((state) => state.filteredPlatforms);
  const options = useFilters((state) => state.options);

  // Memoized platforms list
  const platforms = useMemo(
    () => (filteredPlatforms.length > 0 ? filteredPlatforms : props.platforms),
    [props.platforms, filteredPlatforms]
  );
  const features = useMemo(() => props.features, [props.features]);

  // Memoized features list
  const featureNames = useMemo(() => features?.map((f: FeatureNode) => f?.title), [features]);

  function getFeatureSlug(feature: string) {
    return props.features.find((f: FeatureNode) => f.title === feature)?.slug;
  }

  function setFeatureRoute(feature: string) {
    if (feature) {
      const featureSlug = getFeatureSlug(feature);
      if (featureSlug && featureSlug !== routeSlug) {
        router.push(`/${ROUTES.FEATURES_DIRECTORY.path}/${featureSlug}`);
      } else {
        router.push('/');
      }
    }
  }

  useEffect(() => {
    setPlatforms(props.platforms);
    setFeatures(props.features);

    addOptionSet(FILTER_FEATURE_LABEL, featureNames, (p: PlatformNode, selected: string) => {
      setFeatureRoute(selected);
      return true;
    });
  }, []);

  return (
    <PageLayout
      metaTitle={`${props.feature.header} | BlogPlatforms.app`}
      metaDescription={props.feature.description}
      canonical={`${removeTrailing(META.CANONICAL)}/${ROUTES.FEATURES_DIRECTORY.path}/${removeTrailing(props.feature.slug)}`}
    >
      <Container
        size={{
          initial: '1',
          md: '3',
          lg: '4',
        }}
        className="w-full"
        id="feature-page"
      >
        <Card id="page-card" className="w-full h-full relative flex flex-col justify-start min-w-full" mt={'2'} size="4">
          {/* {props.feature.image && (
            <AspectRatio ratio={16 / 9} style={{ width: '100%', height: '100%', minHeight: 200, position: 'relative' }}>
              <Image
                src={createWixStaticUrl(props.feature.image)}
                alt={props.feature.title}
                className="rounded-lg"
                loader={externalImageLoader}
                fill
                priority
              />
            </AspectRatio>
          )} */}

          <FeatureInfoView
            header={props.feature.header!}
            title={props.feature.title}
            description={props.feature.description}
            body={props.feature.body}
            slug={props.feature.slug}
          />

          <Separator className="my-8" size="4" />

          <FilterFeatureView features={features} />

          <PlatformsGridView platforms={platforms} />
        </Card>
      </Container>
    </PageLayout>
  );
}

export const getStaticProps = async ({ params: { slug } }: { params: { slug: string } }) => {
  const features = await getFeatures();
  const feature = features.find((f: FeatureNode) => f.slug === slug);
  // console.log("slug", slug, feature.slug)
  const options = {
    dataCollectionId: COLLECTIONS.PLATFORMS_FEATURES,
    eq: ['feature', feature!._id],
    includeReferencedItems: ['platform', 'feature'],
  };
  const allPlatformsFeatures = await queryItems(options);
  // console.log("queryItems", allPlatformsFeatures)
  // filter all the platforms that have this feature
  const platformsFeatures = allPlatformsFeatures.filter((pf) => pf?.feature?.slug === feature!.slug);
  // console.log("\n\nplatformsFeature", platformsFeatures)
  const platforms = platformsFeatures.map((pf) => pf.platform);
  // console.log("\n\platforms", platforms)

  const platformFeatures = await getPlatformsFeatures();

  return {
    props: {
      feature,
      platforms,
      features,
      platformFeatures,
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
