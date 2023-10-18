import { WIX_MEDIA_PREFIX } from '../constants';

export const createWixFileId = (wixFileUrl: string) => {
  if (wixFileUrl.startsWith('media/')) wixFileUrl = wixFileUrl.replace('media/', '');
  if (wixFileUrl.startsWith('wix:image://v1/')) wixFileUrl = wixFileUrl.replace('wix:image://v1/', '');
  const fileId = wixFileUrl.split('/')[0];
  return fileId;
};

export const createWixStaticUrl = (wixFileUrl: string, wixStaticPrefix: string = WIX_MEDIA_PREFIX) => {
  let fileId = createWixFileId(wixFileUrl);
  return wixStaticPrefix + fileId;
};

export const createWixStaticVideoUrl = (wixFileUrl: string, wixStaticPrefix: string = WIX_MEDIA_PREFIX) => {
  if (wixFileUrl.startsWith('video/')) wixFileUrl = wixFileUrl.replace('video/', '');
  return wixStaticPrefix + wixFileUrl;
};

export const ensureStartsWith = (stringToCheck: string, startsWith: string) =>
  stringToCheck.startsWith(startsWith) ? stringToCheck : `${startsWith}${stringToCheck}`;
