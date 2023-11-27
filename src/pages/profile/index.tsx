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
import { LoginBar } from '@/components/auth/status';
import { getCurrentMember } from '@/lib/wix/utils/get-current-member';
import { AUTH_LOGIN_PATHNAME } from '@/lib/wix/constants';

export default function ProfilePage() {
  const wixClient = useWixClient();

  return (
    <PageLayout metaTitle={`Best Blogging Site | BlogPlatforms.app`}>
      <Container size="3">
        <Separator className="my-8" size="4" />
      </Container>
    </PageLayout>
  );
}

export async function getServerSideProps() {
  const user = await getCurrentMember();
  if (!user) {
    console.log('login page: member is already logged in');
    return {
      redirect: {
        destination: AUTH_LOGIN_PATHNAME,
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
