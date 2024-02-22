import { generateAuthor } from './author';
import { generateFAQ } from '@/lib/rich-data/faq';

export type ArticleRichDataInput = {
  title: string;
  description: string;
  url: string;
  image: string;
  author?: RichData.Author;
  about?: RichData.SameAsType;
  mentions?: RichData.SameAsType[];
  questions?: RichData.RawQA[];
  datePublished: string;
  dateModified: string;
};

const defaultAuthor = generateAuthor({
  name: 'Blog Platforms',
  url: 'https://bloggingplatforms.app',
  sameAs: ['https://twitter.com/bloggingapp', 'https://www.pinterest.com/bloggingplatforms/'],
});

export function generateArticle(data: ArticleRichDataInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.description,
    image: data.image,
    author: data?.author || defaultAuthor,
    ...(data.about && { about: data?.about }),
    ...(data.mentions && { mentions: data?.mentions }),
    ...(data.questions && { mainEntity: generateFAQ(data?.questions) }),
    publisher: {
      '@type': 'Organization',
      name: 'Blog Platforms',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bloggingplatforms.app/assets/bloggingplatforms.png',
      },
    },
  };
}
