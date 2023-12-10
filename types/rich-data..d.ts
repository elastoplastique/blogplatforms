export type Types = 'AggregateRating' | 'Person' | 'Project' | 'Review' | 'Thing';
export type ApplicationCategory =
  | 'GameApplication'
  | 'SocialNetworkingApplication'
  | 'TravelApplication'
  | 'ShoppingApplication'
  | 'SportsApplication'
  | 'LifestyleApplication'
  | 'BusinessApplication'
  | 'DesignApplication'
  | 'DeveloperApplication'
  | 'DriverApplication'
  | 'EducationalApplication'
  | 'HealthApplication'
  | 'FinanceApplication'
  | 'SecurityApplication'
  | 'BrowserApplication'
  | 'CommunicationApplication'
  | 'DesktopEnhancementApplication'
  | 'EntertainmentApplication'
  | 'MultimediaApplication'
  | 'HomeApplication'
  | 'UtilitiesApplication'
  | 'ReferenceApplication';

export interface Thing {
  type: 'Thing';
  name: string;
  sameAs: string;
}
export type SameAsType =
  | {
      type: string;
      name: string;
      sameAs: string;
    }
  | string
  | undefined;

export type Author = {
  '@context'?: 'https://schema.org';
  '@type': 'Person';
  name: string;
  url: string;
  sameAs: string;
};

export type RawQA = [string, string];

export type QA = {
  '@type': 'Question';
  name: RawQA[0];
  acceptedAnswer: {
    '@type': 'Answer';
    text: RawQA[1];
  };
};

export type FAQPage = {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: QA[];
};

export type Project = {
  '@context'?: 'https://schema.org';
  '@type': string;
  name: string;
  url: string;
  logo: string;
  sameAs: Thing[];
};

export type Review = {
  '@context'?: 'https://schema.org';
  '@type': 'Review';
  reviewRating: {
    '@type': 'Rating';
    ratingValue: string;
  };
  author: Author | Project;
};

export type Review = {
  '@type': 'Review';
  reviewRating: {
    '@type': 'Rating';
    ratingValue: string;
  };
  author: {
    '@type': string;
    name: string;
  };
};
export type SoftwareApp = {
  '@context': 'https://schema.org';
  name: string;
  '@type': 'WebApplication' | 'SoftwareApplication';
  applicationCategory: ApplicationCategory;
  operatingSystem: string;
  url: string;
  sameAs?: Thing[];
  review: Review;
};

export type About = {
  '@type': 'Thing';
  name?: string;
  url?: string;
  description?: string;
  sameAs?: string;
};

export as namespace RichData;
