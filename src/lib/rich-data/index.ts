// @ts-nocheck
import { generateSoftware } from './software-app';
import { generateBreadcrumbs } from './breadcrumbs';
import { generateProject } from './project';
import { generateReview } from './review';
import { generateAuthor } from './author';
import { generatePage } from './page';

export type InputPlatformRichData = {
  platform: {
    name: string;
    description: string;
    url: string;
    image: string;
  };
  rating: string;
  breadcrumbsLinks: BreadcrumbLink[];
};

export function generatePlatformPage({ platform, rating, breadcrumbsLinks }: InputPlatformRichData) {
  const author = generateAuthor({
    name: 'Blog Platforms',
    url: 'https://blogplatforms.app',
    sameAs: [
      'https://twitter.com/blogplatforms',
      'https://www.facebook.com/blogplatforms',
      'https://www.instagram.com/blogplatforms',
      'https://www.linkedin.com/company/blogplatforms',
    ],
  });
  const software = generateSoftware(platform, rating, author);
  return generatePage({
    page: {
      name: platform.name,
      description: platform.description,
      url: platform.url,
      image: platform.logo,
    },
    breadcrumbsLinks,
    mentions: software,
  });
}