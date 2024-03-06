export type InputAuthorRichData = {
  name: string;
  url: string;
  sameAs?: RichData.SameAsType[];
};

export function generateAuthor(data: InputAuthorRichData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: data.name,
    url: data.url,
    ...(data.sameAs && { sameAs: data.sameAs }),
  };
}
