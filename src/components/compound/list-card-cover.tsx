/* eslint-disable react/display-name */
import { useRef, useState, useMemo, memo } from 'react';
import type { ComponentProps } from 'react';
import { AspectRatio, Box, Badge, Heading, Text, Flex } from '@/components/ui';
import { Card } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue } from 'framer-motion';
import { useRouter } from 'next/router';
import { ASSETS_DIRECTORY } from '@/constants/assets-directory';
import { externalImageLoader } from '@/lib/utils/external-image-loader';
import { createWixStaticUrl } from '@/lib/wix/utils/create-url';

export const openSpring = { type: 'spring', stiffness: 200, damping: 30 };
export const closeSpring = { type: 'spring', stiffness: 300, damping: 35 };

export const ListCardCover = memo(
  ({ platform }: { platform: PlatformNode }) => {
    return (
      <Card
        variant="classic"
        m={'3'}
        style={{ width: '100%', margin: 0, height: '100%' }}
        className="post-card"
        // variant="surface"
        // className={`list-card p-3 w-auto max-w-60 h-80 relative overflow-hidden rounded-4xl border border-subtle-border flex flex-col justify-center items-center`}
      >
        {/* @ts-ignore */}
        <Link href={`/platforms/${platform.slug}`}>
          <div className="relative">
            <AspectRatio ratio={16 / 9} className="aspect-ratio-box !overflow-hidden rounded-md">
              <Image
                src={createWixStaticUrl(platform.cover!)}
                // src={`${ASSETS_DIRECTORY.LOGO_DIRECTORY}/${platform.slug}.png`}
                alt={`Blog platform: ${platform.title}`}
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
            </AspectRatio>
          </div>
        </Link>
        <Flex p="1" direction="column" className="min-h-[140px] post-card-body relative mt-4">
          <Link href={`/platforms/${platform.slug}`} className="flex flex-row items-center">
            <div className="relative platform-mini-icon mr-2">
              <Image
                // src={createWixStaticUrl(platform.cover!)}
                src={`${ASSETS_DIRECTORY.LOGO_DIRECTORY}/${platform.slug}.png`}
                alt={`Blog platform: ${platform.title}`}
                loader={externalImageLoader}
                className="border-subtle-border border logo"
                loading="lazy"
                width={40}
                height={40}
                style={{ borderRadius: '100%', marginRight: 16 }}
              />
            </div>
            <h4 className="!m-0">{platform.title}</h4>
          </Link>
          <Text as="p" size="2" mt="2" className="text-text-low-contrast">
            {platform.description && platform?.description.length > 160
              ? platform.description?.slice(0, 160) + '...'
              : platform.description}
          </Text>
        </Flex>
      </Card>
    );
  },
  (prevProps, nextProps) => prevProps.platform.slug === nextProps.platform.slug
);

interface OverlayProps extends ComponentProps<typeof motion.div> {
  className?: string;
  children: React.ReactNode;
}
const OverlayBox = ({ children, className = '', ...rest }: OverlayProps) => (
  <motion.div
    transition={{ duration: 0.2 }}
    style={{ backgroundColor: 'rgba(0,0,0,0.8)', color: 'white' }}
    whileHover={{
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      color: 'black',
      boxShadow: '0 0 8px -1px rgba(0,0,0,0.1)',
    }}
    className={`bg-overlay hover:bg-ui-bg h-full w-auto flex flex-row items-center p-2 rounded-4xl ${className}`}
    {...rest}
  >
    {children}
  </motion.div>
);
