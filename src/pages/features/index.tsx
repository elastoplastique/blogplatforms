import React, { useEffect, useState } from 'react';
// import { getPathsOfStaticPaths, getAllFrontMatters } from '@/lib/server/utils.server'
import { ListCard } from '@/components/compound/list-card';
import { Grid, Flex, Heading, Text, Container, Card, Button, Separator } from '@/components/ui';
import { PageLayout } from '@/components/layout/page-layout';
import { getFeatures } from '@/lib/wix/cms/cms';
import { HorizontalFeatureCard } from '@/components/custom/horizontal-feature-card';
import { META } from '@/constants/meta';

type Props = {
  features: Wix.FeatureNode[];
};

export default function BlogPlatforms(props: Props) {
  console.log('feature page props', props.features);
  return (
    <PageLayout metaTitle={`Best Blogging Site | BlogPlatforms.app`} canonical={'https://blogplatforms.app/features'}>
      <Container size="3">
        <Heading as="h1" size="4" className="tracking-tight text-center !font-semi-bold !mx-8 text-inherit pt-2">
          <span className="!text-6xl block !tracking-tighter uppercase"></span>
        </Heading>

        <Flex width="100%" direction="column" justify="center" align="center" className="!z-[1] relative">
          <Heading size="9" className="pb-4" align="center">
            {META.FEATURES_PAGE.TITLE}
          </Heading>
          <Text size="4" className="mb-8 max-w-[90%]" align="center">
            {META.FEATURES_PAGE.DESCRIPTION}
          </Text>
        </Flex>
        <Separator className="my-8" size="4" />

        <Flex direction="column" align="stretch" grow="1" id="list-box">
          <Grid
            width="100%"
            columns={{
              initial: '1',
              sm: '2',
              md: '2',
              lg: '2',
            }}
            style={{ minHeight: '70vh' }}
            p="1"
          >
            {props.features.map((f: Wix.FeatureNode, ix: number) => (
              <HorizontalFeatureCard title={f.title} description={f.description} key={`pf-${f.slug}-${ix}`} link={`/features/${f.slug}`} />
            ))}
          </Grid>
        </Flex>
      </Container>
    </PageLayout>
  );
}

export const getStaticProps = async () => {
  const features = await getFeatures();

  return {
    props: {
      features,
    },
  };
};
