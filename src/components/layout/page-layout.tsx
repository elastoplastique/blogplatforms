import { Flex } from '../ui';
import Head from 'next/head';
import { META } from '@/constants/meta';
import { Favicons } from '@/components/compound/favicons';
import { authentication } from '@wix/members';
import { useWixModules } from '@wix/sdk-react';
import { SmoothScroll } from '@/components/layout/scroll-container';

type PageLayoutProps = {
  children: React.ReactNode;
  metaTitle?: string;
  metaDescription?: string;
  image?: string;
  canonical?: string;
  richData?: any;
};

export function PageLayout({ children, ...props }: PageLayoutProps) {
  return (
    <>
      <Head>
        <title>{props?.metaTitle || META.TITLE}</title>
        <meta name="title" content={props.metaTitle} />
        <meta name="description" content={props?.metaDescription || META.DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <Favicons />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={props.canonical || META.CANONICAL} />
        <meta property="og:title" content={props.metaTitle} />
        <meta property="og:description" content={props.metaDescription} />
        {props.image && <meta property="og:image" content={props.image} />}

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={props.canonical || META.CANONICAL} />
        <meta property="twitter:title" content={props.metaTitle} />
        <meta property="twitter:description" content={props.metaDescription} />
        {props.image && <meta property="twitter:image" content={props.image} />}

        <link rel="canonical" href={props.canonical || META.CANONICAL} />
        {props.richData && <script type="application/ld+json">{`${JSON.stringify(props.richData)}`}</script>}
      </Head>
      <Flex className="!min-w-full py-20 min-h-[70vh] !mb-[500px]" direction="column" align="center" id="page-layout">
        {children}
      </Flex>
    </>
  );
}
