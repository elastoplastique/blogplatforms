import React, { useEffect, useState } from 'react';
// import { getPathsOfStaticPaths, getAllFrontMatters } from '@/lib/server/utils.server'
import { ListCard } from '@/components/compound/list-card';
import { PageLayout } from '@/components/layout/page-layout';
import { useRouter } from 'next/router';

export default function BlogPlatforms(props: any) {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, []);
  return (
    <PageLayout metaTitle={`Best Blogging Site | BloggingPlatforms.app`} canonical={'https://bloggingplatforms.app'}>
      {props.children}
    </PageLayout>
  );
}

export const getStaticProps = async () => {
  // const allFrontMatters = getAllFrontMatters(BLOG_PLATFORMS_DIR)
  // console.log("blog-platforms/index.tsx frontmatter", allFrontMatters)

  return {
    props: {},
  };
};
