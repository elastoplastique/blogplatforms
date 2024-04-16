import React, { useEffect, useState } from 'react';
// import { getPathsOfStaticPaths, getAllFrontMatters } from '@/lib/server/utils.server'
import { ListCard } from '@/components/compound/list-card';
import { Grid, Flex, Heading, Text, Container, Card, Button, Separator } from '@/components/ui';
import { PageLayout } from '@/components/layout/page-layout';
import { getFeatures, getPosts } from '@/lib/wix/cms/cms';
import { PostCard } from '@/components/custom/post-card';
import { META } from '@/constants/meta';
import { createWixStaticUrl } from '@/lib/wix/utils/create-url';

type Props = {
  posts: Wix.PostNode[];
};

export default function BlogPlatforms(props: Props) {
  return (
    <PageLayout metaTitle={`Best Blogging Sites | BloggingPlatforms.app`} canonical={'https://bloggingplatforms.app/blog'}>
      <Container size="3">
        <Heading as="h1" size="4" className="tracking-tight text-center !font-semi-bold !mx-8 text-inherit pt-2">
          <span className="!text-6xl block !tracking-tighter uppercase"></span>
        </Heading>

        <Flex width="100%" direction="column" justify="center" align="center" className="!z-[1] relative">
          <Heading size="9" className="pb-4" align="center">
            {META.POSTS_PAGE.TITLE}
          </Heading>
          <Text size="4" className="mb-8 max-w-[90%]" align="center">
            {META.POSTS_PAGE.DESCRIPTION}
          </Text>
        </Flex>
        <Separator className="my-8" size="4" />

        <Flex direction="column" align="stretch" gap="1" id="list-box">
          <Grid
            width="100%"
            columns={{
              initial: '1',
              sm: '2',
              md: '2',
              lg: '2',
            }}
            p="1"
            asChild
          >
            <ul>
              {props.posts.map((p: Wix.PostNode, ix: number) => (
                <li key={`pf-${p.slug}-${ix}`} className="p-2">
                  <PostCard image={createWixStaticUrl(p.cover!)} title={p.title} description={p.description} href={`/blog/${p.slug}`} />
                </li>
              ))}
            </ul>
          </Grid>
        </Flex>
      </Container>
    </PageLayout>
  );
}

export const getStaticProps = async () => {
  const posts = (await getPosts()).filter((p) => p.published).sort((a, b) => a.order! - b.order!);

  return {
    props: {
      posts,
    },
  };
};
