import React, { useEffect, useState, useMemo } from 'react';
import { PageLayout } from '@/components/layout/page-layout';
import { AspectRatio, Box, Badge, Heading, Text, Flex, Card, Grid, Container, Separator, Tooltip } from '@/components/ui';
import { Section } from '@/components/layout/section';
import { motion, useMotionValue } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { ProsCons } from '@/components/custom/pros-cons';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { PLATFORM_PAGE } from '@/constants/content';
import { CircuitBoard, Info } from 'lucide-react';
import { InfoTooltip } from '@/components/compound/info-tooltip';
import { HorizontalFeatureCard } from '@/components/custom/horizontal-feature-card';
import { ROUTES } from '@/constants/routes';

export const PlatformFeatures = ({ platformName, platformFeatures }: { platformName: string; platformFeatures: PlatformFeatureNode[] }) => {
  // order platform features by category title
  // the features that have the same category type will be grouped together
  const orderedPlatformFeatures = useMemo(() => orderPlatformFeatures(platformFeatures), [platformFeatures]);
  return (
    <Section>
      <Heading as="h2" size="6" className="font-medium capitalize">
        {platformName} {PLATFORM_PAGE.platformFeatures}
      </Heading>
      <Separator />
      <Grid width="100%" columns={{ initial: '1', sm: '2' }} gap="1">
        {orderedPlatformFeatures.map((pf: PlatformFeatureNode, index) => (
          <HorizontalFeatureCard
            title={pf.feature.title}
            header={pf.feature.header}
            description={pf.note || pf.feature.description}
            key={`pf-${pf.feature.slug}-${index}`}
            link={`${ROUTES.FEATURES_DIRECTORY.path}/${pf.feature.slug}`}
          />
          // <Badge key={`pf-${pf.feature.slug}-${index}`} size="2" className="m-2 !min-h-[60px] flex space-between !items-center">
          //   <Flex direction="column" align="center" className="mr-1">
          //     {pf?.feature?.title}
          //     <Text size="1"  color={pf?.type === "plugins" ? "jade" : "teal"}>{pf?.type}</Text>

          //   </Flex>
          //   <InfoTooltip size={20} text={pf.feature.description || ""} />
          // </Badge>
          // <Flex direction="column" align="start" justify="start" className="w-full">
          //   <Heading as="h3" size="5" className="font-medium">{pf?.feature.title}</Heading>
          //   <Text>{pf?.feature?.description}</Text>
          // </Flex>
        ))}
      </Grid>
    </Section>
  );
};

function orderPlatformFeatures(pfs: PlatformFeatureNode[]) {
  let orderedFeatures: PlatformFeatureNode[] = [];
  const categorySet = new Set(pfs.map((pf) => (pf.feature.category ? pf.feature.category.flat() : [].flat())).flat()) || new Set([]);

  const categoryFeaturesMap = new Map<string, PlatformFeatureNode[]>();

  categorySet.forEach((category: string) => {
    const features = pfs.filter((pf) => pf?.feature?.category?.includes(category));
    categoryFeaturesMap.set(category, features);
  });

  categoryFeaturesMap.forEach((value, key, map) => {
    orderedFeatures = [...orderedFeatures, ...value];
  });
  return orderedFeatures;
}
