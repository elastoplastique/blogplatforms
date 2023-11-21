import React, { useEffect, useState } from 'react';
// import { getPathsOfStaticPaths, getAllFrontMatters } from '@/lib/server/utils.server'
import { ListCard } from '@/components/compound/list-card';
import { Grid, Flex, Heading, Text, Container, Card, Button, Separator } from '@/components/ui';
import { PageLayout } from '@/components/layout/page-layout';
import { getFeatures, getPosts } from '@/lib/wix/cms/cms';
import { PostCard } from '@/components/custom/post-card';
import { META } from '@/constants/meta';
import { createWixStaticUrl } from '@/lib/wix/utils/create-url';
import { useWixClient } from '@/lib/wix/hooks/use-wix-client';
import {LoginBar} from '@/components/auth/status';

export default function ProfilePage() {
  const wixClient = useWixClient();

  return (
    <PageLayout metaTitle={`Best Blogging Site | BlogPlatforms.app`} canonical={'https://blogplatforms.app/blog'}>
      <Container size="3">
        <LoginBar />


        <Separator className="my-8" size="4" />
      </Container>
    </PageLayout>
  );
}

export const getStaticProps = async () => {
  const posts = await getPosts();
  console.log('posts', posts);

  return {
    props: {
      posts,
    },
  };
};
