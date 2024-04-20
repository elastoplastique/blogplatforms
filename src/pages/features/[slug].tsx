/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useMemo } from 'react';
import { PageLayout } from '@/components/layout/page-layout';
import { AspectRatio, Badge, Heading, Text, Flex, Card, Container, Separator, Grid, Button } from '@/components/ui';
// import { motion } from 'framer-motion';
// import { ExternalLink } from 'lucide-react';
// import { ProsCons } from '@/components/custom/pros-cons';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Audience } from '@/components/custom/audience';
// import { PlatformFeatures } from '@/components/custom/platform-features';
// import { PlatformResources } from '@/components/custom/platform-resources';
// import { ProgressFeatures } from '@/components/custom/progress-features';
// import { Breadcrumb } from '@/components/compound/breadcrumb';
import { ROUTES } from '@/constants/routes';
import { META } from '@/constants/meta';
// import { SocialAccounts } from '@/components/custom/social-accounts';
import {
  getPlatformFeaturesByFeatureId,
  getPlatforms,
  getFeatures,
  getFeatureSlugs,
  getPlatformFeaturesByFeatureSlug,
} from '@/lib/wix/cms';
// import { RichContent } from '@/lib/wix/cms/components/rich-content';
import { removeTrailing } from '@/lib/utils/remove-trailing-slash';
// import { COLLECTIONS } from '@/lib/wix/cms/cms';
// import { createWixStaticUrl } from '@/lib/wix/utils/create-url';
// import { externalImageLoader } from '@/lib/utils/external-image-loader';
import { PlatformsGridView } from '@/components/views/platforms-grid-view';
import { FilterFeatureView } from '@/components/views/feature-filter-view';

import { useRouter } from 'next/router';
// import { FilterMenu } from '@/components/compound/filter-menu';
// import { FilterDialogMenu } from '@/components/compound/filter-dialog-menu';
import { useGlobal } from '@/lib/state/global';
// import { AUDIENCES } from '@/constants/audiences';
// import { FILTER_FEATURE_LABEL, FILTER_AUDIENCE_LABEL } from '@/constants/content';
// import decoreative from '/public/assets/decorative/blurry2.svg';
// import { DEFAULT_PLATFORMS_LOADING_PARAMS } from '@/constants/settings';
import { FeatureInfoView } from '@/components/views/feature-info-view';
type Props = {
  feature: Wix.FeatureNode;
  platforms: PlatformNode[];
  features: Wix.FeatureNode[];
  platformsByFeature: PlatformFeatureNode[];
};

export default function FeaturePage(props: Props) {
  const router = useRouter();
  const routeSlug = router.asPath.split('/')[router.asPath.split('/').length - 1];
  const contentId = useMemo(() => `feature-info-${routeSlug}`, [routeSlug]);
  const setSingleFeaturePlatforms = useGlobal((state) => state.setSingleFeaturePlatforms);
  const setFeatures = useGlobal((state) => state.setFeatures);
  const setPlatformsToRender = useGlobal((state) => state.setPlatformsToRender);
  const setFeatureToRender = useGlobal((state) => state.setFeatureToRender);
  const getFeature = useGlobal((state) => state.getFeature);
  const [data, setData] = useState<any>({
    slug: routeSlug,
    feature: props.feature,
    platforms: props.platformsByFeature.map((pf: PlatformFeatureNode) => pf.platform),
  });

  useEffect(() => {
    setSingleFeaturePlatforms(routeSlug, props.platformsByFeature);
    setFeatures(props.features);
    setData({
      slug: routeSlug,
      feature: getFeature(routeSlug),
    });
    setPlatformsToRender(props.platformsByFeature.map((pf: PlatformFeatureNode) => pf.platform));
    setFeatureToRender(props.feature);
  }, [routeSlug]);

  useEffect(() => {
    if (props.feature.slug !== routeSlug) {
      async function getPlatformsToRender(slug: string) {
        const pfs = await getPlatformFeaturesByFeatureSlug(slug);
        return pfs.map((pf: PlatformFeatureNode) => pf.platform);
      }
      getPlatformsToRender(routeSlug).then((ps: PlatformNode[]) => {
        setPlatformsToRender(ps);
        setFeatureToRender(getFeature(routeSlug));
      });
    }
  }, [routeSlug]);

  return (
    <PageLayout
      metaTitle={`${data.feature.header} | BloggingPlatforms.app`}
      metaDescription={data.feature.description}
      keywords={data.feature.keywords}
      canonical={`${removeTrailing(META.CANONICAL)}${ROUTES.FEATURES_DIRECTORY.path}/${removeTrailing(data.feature.slug)}`}
    >
        <div className="feature-page header-blur rotating"></div>
      <Container
        size={{
          initial: '2',
          md: '3',
          lg: '4',
        }}
        className="w-full"
        id="feature-page"
      >
        <Card id="page-card" className="w-full h-full relative flex flex-col justify-start min-w-full" mt={'2'} size="4">
          <main>
            <FeatureInfoView contentId={contentId} />

            <Separator className="my-8" size="4" />

            <FilterFeatureView features={props.features} />

            <PlatformsGridView />
          </main>
        </Card>
      </Container>
    </PageLayout>
  );
}

export const getStaticProps = async ({ params: { slug } }: { params: { slug: string } }) => {
  const features = await getFeatures();
  const feature = features.find((f: FeatureNode) => f.slug === slug);

  // const platformFeaturesByFeatureSlug: {[key:string] : PlatformNode[]} = {}

  // for await (const f of features) {
  //   const platformFeatures = await getPlatformFeaturesByFeatureId(f._id)
  //   platformFeaturesByFeatureSlug[f.slug] = platformFeatures.map((pf:PlatformFeatureNode) => pf.platform)
  // }
  const platformsByFeature = await getPlatformFeaturesByFeatureId(feature?._id);
  const platforms = await getPlatforms();
  // console.log("\n\platforms", platforms)

  return {
    props: {
      feature,
      platforms,
      features,
      platformsByFeature,
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
