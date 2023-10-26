/* eslint-disable @next/next/no-img-element */
import { Text, Card, Flex, Heading, Inset, Strong, AspectRatio } from '@/components/ui';
import { InfoTooltip } from '@/components/compound/info-tooltip';
import { StoryIcon } from '@/components/icons/bold-icons';
import { FEATURE_ICONS, FEATURE_COLORS } from '@/constants/features';
import Link from 'next/link';
import Image from 'next/image';
import { externalImageLoader } from '@/lib/utils/external-image-loader';

type Props = {
  platformFeature?: PlatformFeatureNode;
  image: string;
  title?: string;
  description?: string;
  href: string;
  rest?: any;
};

export const PostCard = ({ title, description, href, image, ...rest }: Props) => {
  // 329 100 96
  return (
    <Card
      variant="surface"
      m={'3'}
      style={{ backgroundColor: `var(--iris-a2)`, width: '100%', margin: 0, borderRadius: 16 }}
      {...rest}
      className="post-card"
    >
      {/* @ts-ignore */}
      <AspectRatio ratio={16 / 9} className="aspect-ratio-box !overflow-hidden rounded-md">
        <Link href={href} title={title}>
          <Image
            src={image}
            alt={title!}
            loader={externalImageLoader}
            loading="lazy"
            fill
            // style={{
            //   display: 'block',
            //   objectFit: 'cover',
            //   width: THUMB_WIDTH,
            //   height: THUMB_HEIGHT,
            //   backgroundColor: 'var(--gray-5)',
            // }}
          />
        </Link>
      </AspectRatio>
      <Flex p="2" direction="column" className="min-h-[100px] post-card-body relative mt-4">
        <Heading as="h3" size="3">
          <Link href={href}>
            <Strong>{title}</Strong>
          </Link>
        </Heading>
        <Text as="p" size="2" mt="2" className="text-text-low-contrast">
          {description}
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
