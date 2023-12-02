export type ImagePlatformRichData = {
  src: string;
  alt: string;
  licenseUrl?: string;
  acquireLicensePage?: string;
  creator?: {
    '@type': string;
    name: string;
  };
  copyrightNotice?: string;
};

export function generateImageObject(data: ImagePlatformRichData) {
  return {
    '@context': 'https://schema.org/',
    '@type': 'ImageObject',
    contentUrl: data.src,
    creditText: data.alt,
    ...(data.licenseUrl && {license: data.licenseUrl}),
    ...(data.acquireLicensePage && {acquireLicensePage: data.acquireLicensePage}),
    ...(data.creator && {creator: data.creator}),
    ...(data.copyrightNotice && {copyrightNotice: data.copyrightNotice}),
  };
}
