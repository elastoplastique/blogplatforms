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
import { useGlobal } from '@/lib/state/global';
import { AUDIENCES } from '@/constants/audiences';
import { FILTER_FEATURE_LABEL, FILTER_AUDIENCE_LABEL } from '@/constants/content';
import decoreative from '/public/assets/decorative/blurry2.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { META } from '@/constants/meta';
import { DEFAULT_PLATFORMS_LOADING_PARAMS } from '@/constants/settings';
import { getPlatforms, getFeatures, getAudiences, getPlatformsFeatures } from '@/lib/wix/cms/cms';
import { slugify } from '@/lib/utils/slugify';
import { generatePage } from '@/lib/rich-data/page';
import { generateProject } from '@/lib/rich-data/project';

import { Swiper } from '@/components/compound/swiper';
// import { CommandBar } from '@/components/compound/command-bar';
import { PlatformsGridView } from '@/components/views/platforms-grid-view';
import { FilterFeatureView } from '@/components/views/feature-filter-view';
import { generateAbout } from '@/lib/rich-data/about';

type Props = {
  platforms: PlatformNode[];
  features: FeatureNode[];
  platformFeatures: PlatformFeatureNode[];
  // audiences: string[];
};

export default function HomePage(props: Props) {
  const router = useRouter();
  const routeSlug = router.asPath.split('/')[router.asPath.split('/').length - 1];
  const setPlatformsToRender = useGlobal((state) => state.setPlatformsToRender);

  const currentPlatforms = useMemo(() => {
    console.log('routeSlug', routeSlug);
    const platforms = props.platformFeatures
      .filter((pf: PlatformFeatureNode) => {
        return pf.feature.slug === routeSlug;
      })
      .map((pf: PlatformFeatureNode) => pf.platform);

    return platforms.length > 0 ? platforms : props.platforms;
  }, [routeSlug]);

  const mentions = useMemo(() => {
    const m = currentPlatforms?.map(
      (p) =>
        ({
          type: 'Thing',
          name: p.title,
          sameAs: p.url,
        }) as unknown as RichData.SameAsType
    );
    return m;
  }, [currentPlatforms]);

  useEffect(() => {
    setPlatformsToRender(currentPlatforms);
  }, []);

  const features = useMemo(() => props.features, [props.features]);
  return (
    <PageLayout
      metaTitle={META.TITLE}
      metaDescription={META.HOME.DESCRIPTION}
      canonical={META.CANONICAL}
      image={META.IMAGE}
      richData={[
        generatePage({
          page: {
            name: META.WEBSITE_NAME,
            description: META.DESCRIPTION,
            url: META.CANONICAL,
            image: META.IMAGE,
            logo: META.LOGO,
            about: generateAbout({
              name: 'Category:Blog hosting services',
              url: 'https://www.wikidata.org/wiki/Q7001351',
            }),
            dateCreated: META.CREATED,
            dateModified: META.UPDATED,
          },
          mentions,
          breadcrumbsLinks: [{ name: META.WEBSITE_NAME, href: META.CANONICAL, current: true }],
        }),
        generateProject(),
      ]}
    >
      <Container
        size={{
          initial: '1',
          sm: '2',
          md: '3',
          lg: '4',
        }}
      >
        <Hero title={META.HOME.TITLE} htmlSubtitle={META.HOME.HTML_DESCRIPTION} />

        <FilterFeatureView features={features} />

        <PlatformsGridView />
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
