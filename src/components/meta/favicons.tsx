import { ASSETS_DIRECTORY } from '@/constants/assets-directory';

export const Favicons = () => (
  <>
    <meta name="theme-color" content="#ffffff" />
    <link rel="shortcut icon" href={`${ASSETS_DIRECTORY.FAVICON_DIRECTORY}/favicon.ico`} />

    <link rel="icon" type="image/x-icon" sizes="16x16 32x32" href={`${ASSETS_DIRECTORY.FAVICON_DIRECTORY}/favicon.ico`} />

    <link rel="apple-touch-icon" sizes="152x152" href={`${ASSETS_DIRECTORY.FAVICON_DIRECTORY}/favicon-152-precomposed.png`} />

    <link rel="apple-touch-icon" sizes="144x144" href={`${ASSETS_DIRECTORY.FAVICON_DIRECTORY}/favicon-144-precomposed.png`} />

    <link rel="apple-touch-icon" sizes="120x120" href={`${ASSETS_DIRECTORY.FAVICON_DIRECTORY}/favicon-120-precomposed.png`} />

    <link rel="apple-touch-icon" sizes="114x114" href={`${ASSETS_DIRECTORY.FAVICON_DIRECTORY}/favicon-114-precomposed.png`} />

    <link rel="apple-touch-icon" sizes="180x180" href={`${ASSETS_DIRECTORY.FAVICON_DIRECTORY}/favicon-180-precomposed.png`} />

    <link rel="apple-touch-icon" sizes="72x72" href={`${ASSETS_DIRECTORY.FAVICON_DIRECTORY}/favicon-72-precomposed.png`} />

    <link rel="apple-touch-icon" sizes="57x57" href={`${ASSETS_DIRECTORY.FAVICON_DIRECTORY}/favicon-57.png`} />

    <link rel="icon" sizes="32x32" href={`${ASSETS_DIRECTORY.FAVICON_DIRECTORY}/favicon-32.png"`} />

    <meta name="msapplication-TileColor" content="#FFFFFF" />
    <meta name="msapplication-TileImage" content="favicon-144.png" />
    <meta name="theme-color" content="#ffffff" />

    <link rel="manifest" href={`${ASSETS_DIRECTORY.FAVICON_DIRECTORY}/manifest.json`} />
    <link rel="icon" sizes="192x192" href={`${ASSETS_DIRECTORY.FAVICON_DIRECTORY}/favicon-192.png`} />
  </>
);
