/* eslint-disable react/display-name */
import { memo } from 'react';
import { motion } from 'framer-motion';
import { AspectRatio, Badge, Heading, Text, Flex, Card, Container, Separator, Grid, Button } from '@/components/ui';
import { Breadcrumb } from '@/components/compound/breadcrumb';
import { RichContent } from '@/lib/wix/cms/components/rich-content';
import { useGlobal } from '@/lib/state/global';
import { useRouter } from 'next/router';

type Props = {
  contentId: string;
};

export const FeatureInfoView = memo((props:Props) => {
  const featureToRender = useGlobal((state) => state.featureToRender);
  if (!featureToRender) return <></>;
  return (
    <motion.div layoutId="feature-info-view">
      <motion.div
        className="relative min-w-full rounded-3xl flex flex-col justify-center items-center min-h-32 my-8"
        id="feature-info-view"
      >
        <Heading
          as="h1"
          className="tracking-tight text-center !font-semi-bold text-inherit pt-2 !text-4xl md:!text-6xl"
          style={{ maxWidth: 640 }}
          id="feature-title"
        >
          {featureToRender.header}
        </Heading>
        <Heading
          as="h2"
          id="feature-subtitle"
          size={{
            initial: '4',
            sm: '5',
            md: '6',
          }}
          className="tracking-tight text-center !font-regular text-inherit pt-8 serif my-6"
        >
          The blog platforms that support {featureToRender.title} feature.
        </Heading>
      </motion.div>
      <Flex width="100%" justify="center">
        <Breadcrumb
          links={[
            { name: 'Features', href: `/features`, current: false, title: 'Explore Blog Platforms by Features' },
            { name: featureToRender?.title, href: `/features/${featureToRender.slug}`, current: true },
          ]}
        />
      </Flex>
      {/* DESCRIPTION  */}
      <Flex direction="column" justify="start" align="center" className="w-full">
        <Flex direction="column" justify="start" align="center" className="max-w-[80ch]">
          {featureToRender.body ? (
            <RichContent body={featureToRender.body} contentId={props.contentId} />
          ) : (
            <Text as="p" align="center" weight="regular" size="5">
              {featureToRender.description}
            </Text>
          )}
        </Flex>
      </Flex>
    </motion.div>
  );
},(prev, next) => prev.contentId === next.contentId);
