/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useMemo } from 'react';
import { Breadcrumb } from '@/components/compound/breadcrumb';
import { ROUTES, STATIC_ROUTES, Route } from '@/constants/routes';
import { PageLayout } from '@/components/layout/page-layout';
import { Container, Flex, Heading, Text, Separator, Card, AspectRatio } from '@/components/ui';
import { getPage } from '@/lib/wix/cms/cms';
import { generatePage } from '@/lib/rich-data/page';
import { RichContent } from '@/lib/wix/cms/components/rich-content';
import Image from 'next/image';
import { externalImageLoader } from '@/lib/utils/external-image-loader';
import { motion } from 'framer-motion';

type Props = {
  page: Wix.PageNode;
};

export default function StaticPage({ page }: Props) {
  return (
    <PageLayout
      metaTitle={page.title}
      metaDescription={page.description}
      canonical={`${ROUTES.DOMAIN.path}/us/${page.slug}`}
      image={page.cover}
    >
      <Container
        size={{
          initial: '1',
          md: '3',
          lg: '3',
        }}
      >
        <Card
          id="page-card"
          className="w-full h-full relative flex flex-col justify-start min-w-full"
          mt={'2'}
          size={{
            initial: '1',
            sm: '4',
            md: '5',
            lg: '5',
          }}
        >
          {page.cover && (
            <AspectRatio ratio={16 / 9} style={{ width: '100%', height: '100%', minHeight: 200, position: 'relative' }}>
              <Image src={page.cover} alt={page.title} loader={externalImageLoader} fill priority />
            </AspectRatio>
          )}

          <Flex width="100%" justify="center">
            <Breadcrumb links={[{ name: page.title, href: `${ROUTES.US_DIRECTORY.path}/${page.slug}`, current: true }]} />
          </Flex>

          <motion.div className="relative min-w-full rounded-3xl flex flex-col justify-center items-center min-h-32 my-8">
            <Heading as="h1" size="4" className="tracking-tight text-center !font-semi-bold !mx-8 text-inherit pt-2 whitespace-nowrap">
              <span className="text-5xl sm:text-6xl  block !tracking-tighter uppercase">{page.title}</span>
            </Heading>
          </motion.div>
          {/* CONTENT */}
          <Flex direction="column" justify="start" align="stretch">
            <Flex direction="column" justify="start" align="stretch" my="8">
              {page.body && <RichContent body={page.body} contentId="about-page" />}
            </Flex>
          </Flex>
        </Card>
      </Container>
    </PageLayout>
  );
}

export async function getStaticProps({ params: { slug } }: { params: { slug: string } }) {
  const page = await getPage(slug);
  return {
    props: {
      page,
    },
  };
}

export const getStaticPaths = async () => {
  const paths = STATIC_ROUTES.map((route: Route) => ({ params: { slug: route.path.split("/")[route.path.split("/").length - 1] } }));
  return {
    paths,
    fallback: false,
  };
};
