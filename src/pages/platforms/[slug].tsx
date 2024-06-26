import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { PageLayout } from '@/components/layout/page-layout';
import { AspectRatio, Flex, Card, Container, Separator, Grid } from '@radix-ui/themes';
import { Text, Heading } from '@/components/ui/typography';

import { motion } from 'framer-motion';
// import { ExternalLink } from 'lucide-react';
import { ProsCons } from '@/components/custom/pros-cons';
import Image from 'next/image';
// import Link from 'next/link';
import { Audience } from '@/components/custom/audience';
import { PlatformFeatures } from '@/components/custom/platform-features';
import { PlatformResources } from '@/components/custom/platform-resources';
import { ProgressFeatures } from '@/components/custom/progress-features';
import { Breadcrumb } from '@/components/compound/breadcrumb';
import { ROUTES } from '@/constants/routes';
import { META } from '@/constants/meta';
import { SocialAccounts } from '@/components/custom/social-accounts';
import {
  getPlatformSlugs,
  getPlatform,
  getPlatformComparativeFeatures,
  getPlatformFeatures,
  getPlatformAccounts,
  // queryReferencedItems,
  // getRichData,
} from '@/lib/wix/cms';
// import { RichContent } from '@//components/custom/rich-content';
import { removeTrailing } from '@/lib/utils/remove-trailing-slash';
// import { PlatformMedia } from '@/components/custom/platform-media';
import { PostCard } from '@/components/custom/post-card';
import { createWixStaticUrl } from '@/lib/wix/utils/create-url';
import { externalImageLoader } from '@/lib/utils/external-image-loader';
import { generatePlatformPage } from '@/lib/rich-data';
import { generateSameAsFromAccounts } from '@/lib/rich-data/same-as';
import { useRouter } from 'next/router';
import { generateAbout } from '@/lib/rich-data/about';
import dynamic from 'next/dynamic';
import ShineBorder from "@/components/magicui/shine-border";

type Props = {
  platform: PlatformNode;
  platformFeatures: PlatformFeatureNode[];
  platformComparativeFeatures: PlatformComparativeFeatureNode[];
  platformAccounts: AccountsNode;
  refItems: any[];
  body: string;
};
const RichContent = dynamic(() => import('../../components/custom/rich-content').then((mod) => mod.RichContent), { ssr: true });
export default function PlatformPage({ platform, platformFeatures, platformComparativeFeatures, platformAccounts, body }: Props) {
  // const asPath = useRouter().asPath;
  const audienceText = (platform.audience || []).join(',') || '';
  // const features = useMemo(() => platformFeatures.filter((pf: Wix.PlatformFeatureNode) => pf.featureData?.title), [platform.slug]);
  // const comparativeFeatures = useMemo(
  //   () => platformComparativeFeatures.filter((pcf: Wix.PlatformComparativeFeatureNode) => pcf.featureData?.title),
  //   [platform.slug]
  // );

  function matchSameAsUrl(platformAccounts: Wix.AccountsNode, fallback: string) {
    if (platformAccounts.wikidata) return platformAccounts.wikidata;
    if (platformAccounts.wikipedia) return platformAccounts.wikipedia;
    if (platformAccounts.website) return platformAccounts.website;
    return fallback;
  }
  return (
    <PageLayout
      metaTitle={`${platform.pageTitle}`}
      metaDescription={platform.description}
      canonical={`${removeTrailing(META.CANONICAL)}${ROUTES.PLATFORMS_DIRECTORY.path}/${removeTrailing(platform.slug)}`}
      image={platform.cover}
      richData={generatePlatformPage({
        platform: {
          name: platform.pageTitle || platform.title,
          url: platformAccounts.website || platform.url,
          description: platform.description,
          image: platform.cover,
          logo: platform.logo,
          dateCreated: platform._createdDate.$date,
          dateModified: platform._updatedDate.$date,
          ...(platformAccounts && { sameAs: generateSameAsFromAccounts(platformAccounts) }),
          about: generateAbout({
            name: platform.title,
            url: matchSameAsUrl(platformAccounts, platform.url),
          }),
        },
        rating: '5',
        breadcrumbsLinks: [
          { name: platform.title, href: `https://bloggingplatforms.app`, current: true },
          { name: platform.pageTitle || platform.title, href: `https://bloggingplatforms.app/platforms/${platform.slug}`, current: true },
        ],
        about: generateAbout({
          name: 'blog software',
          url: 'https://www.wikidata.org/wiki/Q1810858',
        }),
      })}
    >

      <Container
        size={{
          initial: '1',
          md: '3',
        }}
        id="platform-page"
        className="px-2 md:px-16 w-full"
      >
        <div className="platform-page header-blur rotating"></div>

        <Card
          id="page-card"
          className="w-full h-full relative flex flex-col justify-start min-w-full"
          mt={'2'}
          size={{
            initial: '1',
            sm: '4',
            md: '5',
            lg: '5',
          }}
        >

          <Flex width="100%" justify="center">
            <Breadcrumb links={[{ name: platform.title, href: `/platforms/${platform.slug}`, current: true }]} />
          </Flex>

          <motion.div className="relative min-w-full rounded-3xl flex flex-col justify-center items-center min-h-32 my-8">
            <Heading as="h1" size="4" className="tracking-tight text-center !font-semi-bold !mx-8 text-inherit pt-2 whitespace-wrap">
              <span className="text-5xl sm:text-6xl  block !tracking-tighter uppercase">{platform?.pageTitle || platform.title}</span>
            </Heading>
            <Text
              as="p"
              align="center"
              weight="medium"
              mb="2"
              size={{
                initial: '3',
                sm: '4',
                md: '5',
                lg: '5',
              }}
            >
              {platform.description}
            </Text>
            {/* SOCIAL ACCOUNTS  */}
            <SocialAccounts accounts={platformAccounts} platformTitle={platform.title} />
            <motion.a
              href={platform.url}
              className={`intense-shadow overflow-hidden mt-8 mb-12${platform.affiliate ? ' affiliate' : ''}`}
              rel="noopener nofollow"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{
                borderRadius: 16,
                backgroundColor: 'black',
                color: 'white',
                //padding: '12px 32px',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
              target="_blank"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
            >
              <ShineBorder
                className="text-center text-xl font-bold capitalize"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                borderRadius={16}
                borderWidth={2}
              >
                Visit {platform.title}
              </ShineBorder>
            </motion.a>
          </motion.div>

          <Separator className="my-8" />

          {platform.cover ? (
            <AspectRatio ratio={16 / 9} style={{ width: '100%', height: '100%', minHeight: 200, position: 'relative' }}>
              <Image src={platform.cover} alt={platform.title} loader={externalImageLoader} fill priority />
            </AspectRatio>
          ) : (
            <img src={platform.logo!} alt={platform.title} width={64} height={64} style={{ borderRadius: '100%', top: '26px' }} />
          )}

          {/* MEDIA */}
          {/* {platform.media && platform.media.length > 0 && <PlatformMedia media={platform.media} />} */}

          {/* CONTENT */}
          <Flex direction="column" justify="start" align="stretch">
            <Flex direction="column" justify="start" align="stretch" my="8">
              <main dangerouslySetInnerHTML={{ __html: body }} id="rich-content" />
            </Flex>
            {/* AUDIENCE */}
            <Audience title={platform.title} audience_text={audienceText} />

            {/* PROGRESS FEATURES */}
            {platformComparativeFeatures && platformComparativeFeatures.length > 0 && (
              <ProgressFeatures platformName={platform.title} platformComparativeFeatures={platformComparativeFeatures} />
            )}

            {/* FEATURES */}
            {platformFeatures.length > 0 && <PlatformFeatures platformName={platform.title} platformFeatures={platformFeatures} />}

            {/* PROS CONS */}
            <ProsCons platform={platform} id={`${platform.slug}-platform-pros-cons`} />

            {/* APPEARED LISTS */}
            {platform.posts && platform.posts.length > 0 && (
              <aside>
                <section id="list-box" className="flex flex-col flex-grow items-stretch">
                  <Heading as="h2" size="6" className="font-medium capitalize">
                    APPEARED ON
                  </Heading>
                  <Separator />
                  <Grid
                    width="100%"
                    columns={{
                      initial: '1',
                      sm: '2',
                      md: '2',
                      lg: '2',
                    }}
                    p="1"
                    gap="3"
                    asChild
                  >
                    <ul>
                      {platform.posts.map((pp: Wix.PostNode, ix: number) => (
                        <li key={`pf-${pp.slug}-${ix}`} className="py-4 h-120">
                          <PostCard
                            image={createWixStaticUrl(pp.cover!)}
                            title={pp.title}
                            description={pp.description}
                            href={`/blog/${pp.slug}`}
                          />
                        </li>
                      ))}
                    </ul>
                  </Grid>
                </section>
              </aside>
            )}

            {/* RESOURCES */}
            {platform.resources && (
              <aside>
                <PlatformResources platformTitle={platform.title} body={platform.resources} slug={platform.slug} />
              </aside>
            )}
            <motion.a
              href={platform.url}
              className={`mt-4 mb-12${platform.affiliate ? ' affiliate' : ''}`}
              rel="noopener nofollow"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{
                borderRadius: 24,
                //backgroundColor: '#533BD6',
                color: 'white',
                //padding: '16px 0',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
              target="_blank"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
            >
              <ShineBorder
                className="text-center text-xl font-bold capitalize w-full"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                borderRadius={24}
                borderWidth={2}
              >
                Visit {platform.title}
              </ShineBorder>
            </motion.a>
          </Flex>
        </Card>
      </Container>
    </PageLayout>
  );
}

export const getStaticProps = async ({ params: { slug } }: { params: { slug: string } }) => {
  const platform = await getPlatform(slug);
  const platformFeatures = await getPlatformFeatures(platform._id);
  const platformComparativeFeatures = await getPlatformComparativeFeatures(platform._id);
  const platformAccounts = await getPlatformAccounts(platform.slug);
  const body = renderToStaticMarkup(<RichContent body={platform.body!} contentId={slug} />);

  return {
    props: {
      platform,
      body,
      platformFeatures,
      platformComparativeFeatures,
      platformAccounts,
    },
  };
};

export const getStaticPaths = async () => {
  const platformNames = await getPlatformSlugs();
  const paths = platformNames.map((p) => ({ params: { slug: p } }));
  return {
    paths,
    fallback: false,
  };
};
