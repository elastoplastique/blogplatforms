import { ASSETS_DIRECTORY } from '@/constants/assets-directory';

export const Favicons = () => (
  <>
    <link rel="icon" href={`${ASSETS_DIRECTORY.FAVICON_DIRECTORY}/favicon.ico`} />
    <link rel="apple-touch-icon" sizes="152x152" href={`${ASSETS_DIRECTORY.FAVICON_DIRECTORY}/apple-icon.png`} />
    <link rel="icon" type="image/png" sizes="192x192" href={`${ASSETS_DIRECTORY.FAVICON_DIRECTORY}/android-icon-192x192.png`} />
    <link rel="icon" type="image/png" sizes="32x32" href={`${ASSETS_DIRECTORY.FAVICON_DIRECTORY}/favicon-32x32.png`} />
    <link rel="icon" type="image/png" sizes="16x16" href={`${ASSETS_DIRECTORY.FAVICON_DIRECTORY}/favicon-96x96.png`} />
    <link rel="manifest" href={`${ASSETS_DIRECTORY.FAVICON_DIRECTORY}}/manifest.json`} />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="theme-color" content="#ffffff" />
  </>
);
