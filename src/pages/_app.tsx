import '../styles/colors.css';
import '../styles/tailwind.css';
import '../styles/typography.css';
import '../styles/tables.css';
import '../styles/wix.css';
import '../styles/tokens.css';
import '../styles/syntax.css';
import '../styles/globals.css';
import '../styles/toc.css';
import '../styles/animations.css';
import '../styles/tables.css';
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
// import { WixClientProvider } from '@/lib/wix';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

export default function MyApp({ Component, pageProps }: AppProps) {
  // Create a new supabase browser client on every first render.
  return (
    <>
      {/* <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
      </Script> */}
      <Theme accentColor="iris" radius="large" grayColor="slate" id="app-layout">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ThemeProvider>
      </Theme>
    </>
  );
}
