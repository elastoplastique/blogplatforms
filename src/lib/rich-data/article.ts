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
  keywords?: string;
  datePublished: string;
  dateModified: string;
};

const defaultAuthor = generateAuthor({
  name: 'bloggingplatforms.app',
  url: 'https://bloggingplatforms.app',
  sameAs: ['https://twitter.com/bloggingapp', 'https://www.pinterest.com/bloggingplatforms/'],
});

export function generateArticle(data: ArticleRichDataInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    contentRating: 'General',
    headline: data.title,
    name: data.title,
    description: data.description,
    abstract: data.description,
    url: data.url,
    genre: '/Online Communities/Blogging Resources & Services',
    image: data.image,
    author: data?.author || defaultAuthor,
    ...(data.about && { about: data?.about }),
    ...(data.mentions && { mentions: data?.mentions }),
    ...(data.questions && { mainEntity: generateFAQ(data?.questions) }),
    ...(data.keywords && { keywords: data.keywords }),

    dateModified: data.dateModified,
    datePublished: data.datePublished,
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Organization',
      name: 'bloggingplatforms.app',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bloggingplatforms.app/assets/bloggingplatforms.png',
      },
    },
  };
}
