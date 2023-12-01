import '@/styles/globals.css';
// import 'swiper/css';
// import 'swiper/css/a11y';
// import 'swiper/css/autoplay';
// import 'swiper/css/keyboard';
// import 'swiper/css/pagination';
// import 'swiper/css/parallax';

import type { AppProps } from 'next/app';
import { ThemeProvider } from '@/components/theme-provider';
import { MainLayout } from '@/components/layout/main-layout';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Head from 'next/head';
import Script from 'next/script';
import { WixClientProvider } from '@/lib/wix';
import { Auth0Provider } from '@auth0/auth0-react';
import { META } from '@/constants/meta';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

export default function MyApp({ Component, pageProps }: AppProps) {
  // Create a new supabase browser client on every first render.
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
      </Script>
      <Theme accentColor="violet" radius="large" grayColor="mauve">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Auth0Provider
            domain={process.env.NEXT_PUBLIC_AUTH0_CLIENT_DOMAIN!}
            clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!}
            authorizationParams={{
              redirect_uri:process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI,
              audience: `${META.CANONICAL}/api/v2/`,
              scope: "read:current_user update:current_user_metadata"
            }}
          >
            <WixClientProvider>
              <MainLayout>
                <Component {...pageProps} />
              </MainLayout>
            </WixClientProvider>
          </Auth0Provider>
        </ThemeProvider>
      </Theme>
    </>
  );
}
