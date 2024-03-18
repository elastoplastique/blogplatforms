import { Html, Head, Main, NextScript } from 'next/document';
import { Favicons } from '@/components/meta';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="google-adsense-account" content="ca-pub-9259748524746137" />
        <Favicons />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
