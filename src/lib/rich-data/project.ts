import { META } from '@/constants/meta';
import { generateImageObject } from '@/lib/rich-data/image';
import { generateAbout } from '@/lib/rich-data/about';

export function generateProject() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Project',
    name: META.TITLE,
    url: META.CANONICAL,
    email: META.EMAIL,
    logo: generateImageObject({ src: META.LOGO, alt: META.TITLE }),
    image: generateImageObject({ src: META.IMAGE, alt: META.TITLE }),
    keywords: META.KEYWORDS,

    description: META.DESCRIPTION,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+13153143058',
      email: 'hello@bloggingplatforms.app',
    },
    about: generateAbout({
      name: 'Category:Blog hosting services',
      url: 'https://www.wikidata.org/wiki/Q7001351',
    }),
    sameAs: [META.SOCIAL.TWITTER, META.SOCIAL.GITHUB, META.SOCIAL.PINTEREST],
  };
}
