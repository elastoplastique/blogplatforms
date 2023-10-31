import { generateReview } from './review';

export type InputSoftwareAppStructuredData = {
  name: string;
  applicationCategory?: 'WebApplication' | 'SoftwareApplication';
  url: string;
  sameAs?: RichData.Thing[];
};

export function generateSoftware(software: InputSoftwareAppStructuredData, rating: string, author: RichData.Author): RichData.SoftwareApp {
  return {
    '@context': 'https://schema.org',
    '@type': software.applicationCategory || 'SoftwareApplication',
    name: software.name,
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'Chrome',
    url: software.url,
    ...(software.sameAs && { sameAs: software.sameAs }),
    review: generateReview(rating, author),
  };
}
