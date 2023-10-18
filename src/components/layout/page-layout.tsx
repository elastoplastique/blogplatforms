import { Flex } from '../ui';
import Head from 'next/head';
import { META } from '@/constants/meta';
import { Favicons } from '@/components/compound/favicons';

type PageLayoutProps = {
  children: React.ReactNode;
  metaTitle?: string;
  metaDescription?: string;
  canonical?: string;
};

export function PageLayout({ children, ...props }: PageLayoutProps) {
  return (
    <>
      <Head>
        <title>{props?.metaTitle || META.TITLE}</title>
        <meta name="description" content={props?.metaDescription || META.DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={props.canonical || META.CANONICAL} />
        <Favicons />
      </Head>
      <Flex className="!min-w-full py-20 min-h-[70vh]" direction="column" align="center" id="page-layout">
        {children}
      </Flex>
    </>
  );
}
