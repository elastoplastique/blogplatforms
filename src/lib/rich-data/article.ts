import { generateAuthor } from './author';

export type ArticleRichDataInput = {
  title: string;
  description: string;
  url: string;
  image: string;
  author?: RichData.Author;
  mentions?: RichData.SameAsType[];
  datePublished: string;
  dateModified: string;
};

const defaultAuthor = generateAuthor({
  name: 'Blog Platforms',
  url: 'https://blogplatforms.app',
  sameAs: [
    'https://twitter.com/blogplatforms',
    'https://www.facebook.com/blogplatforms',
    'https://www.instagram.com/blogplatforms',
    'https://www.linkedin.com/company/blogplatforms',
  ],
});

export function generateArticle(data: ArticleRichDataInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://blogplatforms.app/',
    },
    headline: data.title,
    description: data.description,
    image: data.image,
    author: data?.author || defaultAuthor,
    ...(data.mentions && { mentions: data?.mentions }),
    publisher: {
      '@type': 'Organization',
      name: 'Blog Platforms',
      logo: {
        '@type': 'ImageObject',
        url: 'https://blogplatforms.app/images/logo.png',
      },
    },
  };
}
