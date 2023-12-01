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
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from 'next/router';

export default function ProfilePage() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const router = useRouter();

  if (user && isAuthenticated){
    return router.push('/');
  }

  return (
    <PageLayout metaTitle={`Best Blogging Site | BlogPlatforms.app`}>
      <Container size="3">
        <Separator className="my-8" size="4" />
      </Container>
    </PageLayout>
  );
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: AUTH_LOGIN_PATHNAME,
      permanent: false,
    },
  };
}
