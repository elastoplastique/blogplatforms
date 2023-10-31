import { generateBreadcrumbs } from '@/lib/rich-data/breadcrumbs';
import { generateProject } from '@/lib/rich-data/project';

export type InputPageRichData = {
  page: any;
  breadcrumbsLinks: BreadcrumbLink[];
  mentions?: any;
};

export function generatePage({ page, breadcrumbsLinks, mentions }: InputPageRichData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.name,
    description: page.description,
    url: page.url,
    image: page.image,
    publisher: generateProject(),
    breadcrumb: generateBreadcrumbs(breadcrumbsLinks),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': page.url,
    },
    ...(mentions && { mentions: mentions }),
  };
}
