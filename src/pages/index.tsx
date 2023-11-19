/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useMemo } from 'react';
import { ListCard } from '@/components/compound/list-card';
import { ListCardCover } from '@/components/compound/list-card-cover';
import { PageLayout } from '@/components/layout/page-layout';
import { Container, Flex, Grid, Heading, Text, Separator } from '@/components/ui';
import { Hero } from '@/components/compound/hero';

import { useRouter } from 'next/router';
import Image from 'next/image';
import { FilterMenu } from '@/components/compound/filter-menu';
import { FilterDialogMenu } from '@/components/compound/filter-dialog-menu';
import { useFilters } from '@/lib/state/filters';
import { AUDIENCES } from '@/constants/audiences';
import { FILTER_FEATURE_LABEL, FILTER_AUDIENCE_LABEL } from '@/constants/content';
import decoreative from '/public/assets/decorative/blurry2.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { META } from '@/constants/meta';
import { DEFAULT_PLATFORMS_LOADING_PARAMS } from '@/constants/settings';
import { getPlatforms, getFeatures, getAudiences, getPlatformsFeatures } from '@/lib/wix/cms/cms';
import { slugify } from '@/lib/utils/slugify';
import { generatePage } from '@/lib/rich-data/page';
import { Swiper } from '@/components/compound/swiper';
// import { CommandBar } from '@/components/compound/command-bar';
import { PlatformsGridView } from '@/components/views/platforms-grid-view';
import { FilterFeatureView } from '@/components/views/feature-filter-view';

type Props = {
  platforms: PlatformNode[];
  features: FeatureNode[];
  platformFeatures: PlatformFeatureNode[];
  // audiences: string[];
};

export default function HomePage(props: Props) {
  const router = useRouter();
  // console.log("home page props", props.platforms)
  // console.log("home page props", props.features)
  // console.log("home page props audiences", props.audiences)

  // Filter Store
  const setPlatforms = useFilters((state) => state.setPlatforms);
  const setFeatures = useFilters((state) => state.setFeatures);
  const addOptionSet = useFilters((state) => state.addOptionSet);

  const { feature } = useFilters((state) => state.selecteds);
  const removeSelected = useFilters((state) => state.removeSelected);

  // // console.log('home page selecteds', feature);
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

  useEffect(() => {
    setPlatforms(props.platforms);
    setFeatures(props.features);

    // Add Audience Selection
    // addOptionSet(FILTER_AUDIENCE_LABEL, AUDIENCES, (p: PlatformNode, selected: string) => p?.audience!.includes(selected));
    addOptionSet(FILTER_FEATURE_LABEL, featureNames, (p: PlatformNode, selected: string) => {
      setFeatureRoute(selected);
      //p?.features?.map((f: FeatureNode) => f?.featureData?.title)!.includes(selected)
      return true;
    });
  }, []);

  // const routeHandler = (slug: string) => {
  //   router.push(`${slug || "/"}`, undefined, { shallow: true })
  // }

  function getFeatureSlug(feature: string) {
    return props.features.find((f: FeatureNode) => f.title === feature)?.slug;
  }
  function setFeatureRoute(feature: string) {
    if (feature) {
      const featureSlug = getFeatureSlug(feature);
      if (featureSlug) router.push(`/features/${featureSlug}`);
    }
  }
  useEffect(() => {
    console.log('feature changed', feature);
    removeSelected('feature');
    // }
  }, [feature]);
  return (
    <PageLayout
      metaTitle={META.TITLE}
      metaDescription={META.HOME.DESCRIPTION}
      canonical={META.CANONICAL}
      image={META.IMAGE}
      richData={generatePage({
        page: {
          name: META.WEBSITE_NAME,
          description: META.DESCRIPTION,
          url: META.CANONICAL,
          image: META.IMAGE,
        },
        breadcrumbsLinks: [{ name: META.WEBSITE_NAME, href: META.CANONICAL, current: true }],
      })}
    >
      <Container
        size={{
          initial: '1',
          md: '3',
          lg: '4',
        }}
      >
        {/* <Image
          src={decoreative}
          alt="decorative"
          layout="fill"
          className="absolute top-0 left-0 z-[-1] opacity-30"
        /> */}

        <Hero title={META.HOME.TITLE} htmlSubtitle={META.HOME.HTML_DESCRIPTION} />

        {/* <CommandBar features={props.features} platforms={props.platforms} /> */}

        <FilterFeatureView features={features} />

        <PlatformsGridView platforms={platforms} />
      </Container>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const platforms = await getPlatforms();
  const features = await getFeatures();
  const platformFeatures = await getPlatformsFeatures();
  // const audiences = await getAudiences();
  return {
    props: {
      platforms: platforms.sort((a: PlatformNode, b: PlatformNode) => a.order - b.order),
      features,
      platformFeatures,
      // audiences,
    },
  };
}
