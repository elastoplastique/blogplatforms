/* eslint-disable react/display-name */
import { useRef, useState, useMemo, memo } from 'react';
import type { ComponentProps } from 'react';
import { AspectRatio, Box, Badge, Heading, Text, Flex, Card } from '@/components/ui';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue } from 'framer-motion';
import { useRouter } from 'next/router';
import { ExternalLink } from 'lucide-react';
import { ASSETS_DIRECTORY } from '@/constants/assets-directory';

export const openSpring = { type: 'spring', stiffness: 200, damping: 30 };
export const closeSpring = { type: 'spring', stiffness: 300, damping: 35 };

export const ListCardCover = memo(
  ({ platform }: { platform: PlatformNode }) => {
    return (
      <Card
        variant="surface"
        className={`list-card p-3 w-auto max-w-60 h-80 relative overflow-hidden rounded-4xl border border-subtle-border flex flex-col justify-center items-center`}
      >
        <Flex direction="column" justify="start" align="center" className="w-full h-full relative" mt={'4'}>
          <motion.div
            className=""
            style={{
              borderRadius: '50%',
              padding: 0,
              border: '1px solid var(--subtle-border)',
              backgroundColor: 'white',
            }}
          >
            <Image
              src={`${ASSETS_DIRECTORY.LOGO_DIRECTORY}/${platform.slug}.png`}
              alt={`Blog platform: ${platform.title}`}
              width={64}
              height={64}
              style={{ borderRadius: '100%', top: '26px' }}
            />
          </motion.div>
          <Link href={`/platforms/${platform.slug}`}>
            <Heading as="h3" size="4" className="tracking-tight !font-semi-bold !mx-8 text-inherit pt-2">
              {platform.title}
            </Heading>
          </Link>

          <motion.div className="relative w-full rounded-3xl flex flex-col justify-center items-center h-32">
            <Text align="center">
              {platform.description && platform?.description.length > 120
                ? platform.description?.slice(0, 120) + '...'
                : platform.description}
            </Text>
          </motion.div>

          <Flex className="relative min-w-full h-14 items-center" justify="end">
            <Link href={`/platforms/${platform.slug}`} target="_blank" className="link-icon-link absolute bottom-0 right-4">
              <ExternalLink />
            </Link>
            {/* <OverlayBox className=" min-w-full">
          </OverlayBox> */}
          </Flex>
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
