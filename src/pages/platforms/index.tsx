import React, { useEffect, useState } from 'react';
// import { getPathsOfStaticPaths, getAllFrontMatters } from '@/lib/server/utils.server'
import { ListCard } from '@/components/compound/list-card';
import { PageLayout } from '@/components/layout/page-layout';

type Props = {
  frontMatters: FrontMatter[];
};

export default function BlogPlatforms(props: Props) {
  return (
    <PageLayout metaTitle={`Best Blogging Site | BlogPlatforms.app`} canonical={'https://blogplatforms.app'}>
      {}
    </PageLayout>
  );
}

export const getStaticProps = async () => {
  // const allFrontMatters = getAllFrontMatters(BLOG_PLATFORMS_DIR)
  // console.log("blog-platforms/index.tsx frontmatter", allFrontMatters)

  return {
    props: {
      // frontMatters: allFrontMatters
    },
  };
};
