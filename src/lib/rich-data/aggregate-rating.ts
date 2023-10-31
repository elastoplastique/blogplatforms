export type InputAggregateRatingStructuredData = {};

export type AggregateRatingStructuredData = {
  '@type': 'AggregateRating';
  reviewRating: {
    '@type': 'Rating';
    ratingValue: string;
  };
  author: {
    '@type': 'Person';
    name: string;
  };
};

export function generateAggregateRating(data: any): AggregateRatingStructuredData {
  return {
    '@type': 'AggregateRating',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '1',
    },
    author: {
      '@type': 'Person',
      name: 'Jane Doe',
    },
  };
}
