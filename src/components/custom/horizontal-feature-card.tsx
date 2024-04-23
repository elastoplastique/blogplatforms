import { Text, Card, Flex, AspectRatio } from '@/components/ui';
import { InfoTooltip } from '@/components/compound/info-tooltip';
import { StoryIcon } from '@/components/icons/bold-icons';
import { FEATURE_ICONS, FEATURE_COLORS } from '@/constants/features';
import Link from 'next/link';
import Image from 'next/image';
import { externalImageLoader } from '@/lib/utils/external-image-loader';
import { createWixStaticUrl } from '@/lib/wix/utils/create-url';


type Props = {
  platformFeature?: PlatformFeatureNode;
  href: string;
  title?: string;
  description?: string;
  header?: string;
  link?: string;
  rest?: any;
  image?: string;
  alt?: string;

};

export const HorizontalFeatureCard = ({ title, description, link, href, header, image, alt, ...rest }: Props) => {
  const cardDescription = description ? description.length > 160
    ? description?.slice(0, 160) + '...'
    : description
    : '';
  return (
    <Card
      variant="classic"
      m={'3'}
      style={{ width: '100%', margin: 0, height: '100%', minHeight: 410 }}
      className="post-card"
    // variant="surface"
    // className={`list-card p-3 w-auto max-w-60 h-80 relative overflow-hidden rounded-4xl border border-subtle-border flex flex-col justify-center items-center`}
    >
      {/* @ts-ignore */}
      <Link href={href}>
        <div className="relative">
          <AspectRatio ratio={16 / 9} className="aspect-ratio-box !overflow-hidden rounded-md">
            <Image
              src={createWixStaticUrl(image!)}
              // src={`${ASSETS_DIRECTORY.LOGO_DIRECTORY}/${platform.slug}.png`}
              alt={`${alt || title}`}
              loader={externalImageLoader}
              loading="lazy"
              fill
              sizes="(max-width: 767px) 80vw, (max-width: 1279px) 30vw, 30vw"
            />
          </AspectRatio>
        </div>
      </Link>
      <Flex p="1" direction="column" className="min-h-[140px] post-card-body relative mt-4">
        <Link href={href} className="flex flex-row items-center">
          <h4 className="!m-0">{title}</h4>
        </Link>
        <Text as="p" size="2" mt="2" className="text-text-low-contrast">
          {cardDescription}
        </Text>
      </Flex>
    </Card>
  );
};

const DefaultIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-16 w-16">
    <path
      fill="white"
      d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
    />
  </svg>
);
