export type InputReviewStructuredData = {
  rating: string;
};

export function generateReview(rating: string, author: RichData.Author): RichData.Review {
  return {
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: rating,
    },
    author: author,
  };
}
