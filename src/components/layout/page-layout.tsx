import { Flex } from '../ui';
import Head from 'next/head';
import { META } from '@/constants/meta';
import { usePageTracking } from '@/lib/hooks/use-page-tracking';

type PageLayoutProps = {
  children: React.ReactNode;
  metaTitle?: string;
  metaDescription?: string;
  image?: string;
  canonical?: string;
  keywords?: string;
  richData?: any;
};

export function PageLayout({ children, ...props }: PageLayoutProps) {
  usePageTracking();
  const ogtype = props?.richData && props?.richData.hasOwnProperty("@type") === "Article" ? "article" : "website";

  function mergeRichData(richData: any) {
    /**
     * A bug in Safari requires a merge for multiple rich data types
     * https://stackoverflow.com/questions/76995140/safari-throws-when-parsing-json-ld
     */
    if (Array.isArray(richData)) {
      return {
        '@context': 'http://schema.org',
        '@graph': richData,
      };
    }
    return richData;
  }
  return (
    <>
      <Head>
        <title>{props?.metaTitle || META.TITLE}</title>
        <meta name="title" content={props.metaTitle} />
        <meta name="description" content={props?.metaDescription || META.DESCRIPTION} />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={props.canonical || META.CANONICAL} />

        <meta
          name="impact-site-verification"
          // @ts-ignore
          value="b6a8f574-eaa4-4304-b6f0-de6e82d1cd0b"
          content="b6a8f574-eaa4-4304-b6f0-de6e82d1cd0b"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content={ogtype} />
        <meta property="og:url" content={props.canonical || META.CANONICAL} />
        <meta property="og:title" content={props.metaTitle} />
        <meta property="og:description" content={props.metaDescription} />
        {props.image && <meta property="og:image" content={props.image} />}
        {props?.richData?.dateModified && <meta property="article:modified_time" content={props?.richData?.dateModified} />}
        {props?.richData?.datePublished && <meta property="article:published_time" content={props?.richData?.datePublished} />}
        {props?.richData?.keywords && <meta property="article:tag" content={props?.richData?.keywords} />}
        {props?.richData?.publisher && <meta property="article:author" content={props?.richData?.publisher.name} />}

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={props.canonical || META.CANONICAL} />
        <meta property="twitter:title" content={props.metaTitle} />
        <meta property="twitter:description" content={props.metaDescription} />
        {props.image && <meta property="twitter:image" content={props.image} />}
        {props.keywords && <meta property="keywords" content={props.keywords} />}

        {props.richData && <script type="application/ld+json">{`${JSON.stringify(mergeRichData(props.richData))}`}</script>}
      </Head>
      <Flex className="!min-w-full py-20 min-h-[60vh] !mb-[100px]" direction="column" align="center" id="page-layout">
        {children}
      </Flex>
    </>
  );
}
