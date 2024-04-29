/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo } from 'react';
import { PageLayout } from '@/components/layout/page-layout';
import { Container } from '@radix-ui/themes';
import { Hero } from '@/components/compound/hero';

import { useRouter } from 'next/router';
// import Image from 'next/image';
// import { FilterMenu } from '@/components/compound/filter-menu';
// import { FilterDialogMenu } from '@/components/compound/filter-dialog-menu';
import { useGlobal } from '@/lib/state/global';
// import { AUDIENCES } from '@/constants/audiences';
// import { FILTER_FEATURE_LABEL, FILTER_AUDIENCE_LABEL } from '@/constants/content';
// import decoreative from '/public/assets/decorative/blurry2.svg';
// import { motion, AnimatePresence } from 'framer-motion';
import { META } from '@/constants/meta';
// import { DEFAULT_PLATFORMS_LOADING_PARAMS } from '@/constants/settings';
import { getPlatforms, getFeatures, getPlatformsFeatures } from '@/lib/wix/cms/cms';
// import { slugify } from '@/lib/utils/slugify';
import { generatePage } from '@/lib/rich-data/page';
import { generateProject } from '@/lib/rich-data/project';

// import { Swiper } from '@/components/compound/swiper';
// import { CommandBar } from '@/components/compound/command-bar';
import { PlatformsGridView } from '@/components/views/platforms-grid-view';
import { FilterFeatureView } from '@/components/views/feature-filter-view';
import { generateAbout } from '@/lib/rich-data/about';
// import { useUser } from '@auth0/nextjs-auth0/client';
import { SegmentedFeatures } from '@/components/views/segmented-features';

type Props = {
  platforms: PlatformNode[];
  features: FeatureNode[];
  platformFeatures: PlatformFeatureNode[];
  // audiences: string[];
};

export default function HomePage(props: Props) {
  //console.log('props', props);

  const mentions = useMemo(() => {
    const platforms = props.platformFeatures.map((pf: PlatformFeatureNode) => pf.platform);
    const m = platforms?.map(
      (p) =>
        ({
          type: 'Thing',
          name: p.title,
          sameAs: p.url,
        }) as unknown as RichData.SameAsType
    );
    return m;
  }, []);

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
      <div className="home-page header-blur rotating"></div>

      <Container
        size={{
          initial: '1',
          sm: '2',
          md: '3',
          lg: '4',
        }}
        className="!w-[100%]"
      >

        <Hero title={META.HOME.TITLE} htmlSubtitle={META.HOME.HTML_DESCRIPTION} />

        <SegmentedFeatures platformFeatures={props.platformFeatures} platforms={props.platforms} />

        {/* <FilterFeatureView features={features} /> */}

        <PlatformsGridView />
      </Container>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const platforms = await getPlatforms();
  const features = await getFeatures();
  let platformFeatures: PlatformFeatureNode[] = [];
  for await (const page of [1, 2, 3, 4]) {
    platformFeatures = platformFeatures.concat(await getPlatformsFeatures(page));
  }
  return {
    props: {
      platforms: platforms.sort((a: PlatformNode, b: PlatformNode) => a.order - b.order),
      features,
      platformFeatures,
      // audiences,
    },
  };
}
