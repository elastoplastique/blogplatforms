export type InputAuthorRichData = {
  name: string;
  url: string;
  sameAs?: RichData.SameAsType[];
};

export function generateAuthor(data: InputAuthorRichData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: data.name,
    url: data.url,
    ...(data.sameAs && { sameAs: data.sameAs }),
  };
}
