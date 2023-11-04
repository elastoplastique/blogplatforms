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

export type Author = {
  '@context'?: 'https://schema.org';
  '@type': 'Person';
  name: string;
  url: string;
  sameAs: string;
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

export as namespace RichData;