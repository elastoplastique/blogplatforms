import { generateBreadcrumbs } from '@/lib/rich-data/breadcrumbs';
import { generateProject } from '@/lib/rich-data/project';
import { generateImageObject } from './image';
import { META } from '@/constants/meta';

export type InputPageRichData = {
  page: any;
  breadcrumbsLinks: BreadcrumbLink[];
  mentions?: any;
};

export function generatePage({ page, breadcrumbsLinks, mentions }: InputPageRichData) {
  let imageData = null;
  if (page.image && page.logo) {
    imageData = [
      generateImageObject(typeof page.image === 'string' ? { src: page.image, alt: `${page.name} | BlogPlatforms.app` } : page.image),
      generateImageObject(typeof page.logo === 'string' ? { src: page.logo, alt: page.name } : page.logo),
    ];
  } else if (page.image || page.logo) {
    let existingImage = page.image || page.logo;

    imageData = generateImageObject(typeof existingImage === 'string' ? { src: page.image || page.logo, alt: page.name } : existingImage);
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.name,
    description: page.description,
    url: page.url,
    ...(imageData !== null && { image: imageData }),
    "publisher": {
      "@type": "Organization",
      "name": "Blogging Platforms",
    },
    breadcrumb: generateBreadcrumbs(breadcrumbsLinks),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': page.url,
    },
    ...(mentions && { mentions: mentions }),
  };
}
