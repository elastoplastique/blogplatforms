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
    // if (feature) {
    //   const featureSlug = getFeatureSlug(feature);
    //   if (featureSlug) router.push(`/features/${featureSlug}`);
    // }
  }, [feature]);
  return (
    <PageLayout
      metaTitle={META.HOME.TITLE}
      metaDescription={META.HOME.DESCRIPTION}
      canonical={META.CANONICAL}
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
      <Container size="4">
        {/* <Image
          src={decoreative}
          alt="decorative"
          layout="fill"
          className="absolute top-0 left-0 z-[-1] opacity-30"
        /> */}

        <Hero title={META.HOME.TITLE} htmlSubtitle={META.HOME.HTML_DESCRIPTION} />

        <FilterDialogMenu />

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
                lg: '3',
              }}
              style={{ minHeight: '70vh' }}
              p="1"
            >
              <motion.ul layout>
                <AnimatePresence>
                  {props.platforms.map((platform) => (
                    <motion.li
                      layout
                      key={platform.slug}
                      className="relative z-0 h-120 m-4 flex flex-col items-center"
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
