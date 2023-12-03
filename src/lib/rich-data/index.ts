// @ts-nocheck
import { generateSoftware } from './software-app';
import { generateBreadcrumbs } from './breadcrumbs';
import { generateProject } from './project';
import { generateReview } from './review';
import { generateAuthor } from './author';
import { generatePage } from './page';
import { generateImageObject } from './image';
import { META } from '@/constants/meta';

export type InputPlatformRichData = {
  platform: {
    name: string;
    description: string;
    url: string;
    image: string;
    dateCreated?: string;
    dateModified?: string;
  };
  rating: string;
  breadcrumbsLinks: BreadcrumbLink[];
  about?: RichData.About;
};

export function generatePlatformPage({ platform, rating, breadcrumbsLinks, about }: InputPlatformRichData) {
  const author = generateAuthor({
    name: 'Blog Platforms',
    url: 'https://bloggingplatforms.app',
    sameAs: [META.SOCIAL.TWITTER, META.SOCIAL.GITHUB, META.SOCIAL.PINTEREST],
  });
  const software = generateSoftware(platform, rating, author);
  return generatePage({
    page: {
      name: platform.name,
      description: platform.description,
      url: platform.url,
      image: platform.image,
      logo: platform.logo,
      dateCreated: platform.dateCreated,
      dateModified: platform.dateModified,
    },
    breadcrumbsLinks,
    mentions: software,
    about,
  });
}
