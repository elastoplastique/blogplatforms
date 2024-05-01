import { useRef, useState, useMemo } from 'react';
import { Text, Heading } from '@/components/ui/typography';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue } from 'framer-motion';
import { useRouter } from 'next/router';

export const openSpring = { type: 'spring', stiffness: 200, damping: 30 };
export const closeSpring = { type: 'spring', stiffness: 300, damping: 35 };

export const ListCard = ({
  platform,
  active,
  routeHandler,
}: {
  platform: PlatformNode;
  active: boolean;
  routeHandler: (slug: string) => void;
}) => {
  const containerClassName = useMemo(() => (active ? 'card-content-container open' : 'card-content-container'), [active]);

  return (
    <motion.div
      // ref={divRef}
      // onMouseMove={handleMouseMove}
      // onFocus={handleFocus}
      // onBlur={handleBlur}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      className={`p-5 !m-2 max-w-60 h-96 relative overflow-hidden rounded-2xl border border-subtle-border`}
    >
      <motion.div className="bg-subtle-bg w-full rounded-3xl flex justify-center items-center h-32">
        <Image src={platform.logo!} alt={platform.title} width={64} height={64} style={{ borderRadius: '50%' }} />
      </motion.div>
      {/* <motion.div
            className="absolute inset-0 pointer-events-none h-full w-full bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100"
            style={{ backgroundColor: "rgba(0,0,0,0.7)", backgroundSize: "cover", backgroundPosition: "center", zIndex: -1 }}
          /> */}
      {/* <motion.div
            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
            style={{
              opacity,
              background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 40%)`,
            }}
          /> */}
      <Link href={`/blog-platforms/${platform.slug}`}>
        <Heading size="4" className="mb-4 font-medium tracking-tight fraunces">
          {platform.title}
        </Heading>
      </Link>
      <Text size="3" className="text-sm text-primary" my="8">
        {platform.description}
      </Text>
      {/* <Flex wrap={"wrap"}>
        {platform?.tags?.map((tag: string) => (
          <Badge key={`list-card-tag-${platform.slug}-${tag}`}>{tag}</Badge>
        ))}
      </Flex> */}
    </motion.div>
  );
};

const Overlay = ({ active, routeHandler }: { active: boolean; routeHandler: (slug: string) => void }) => (
  <motion.div
    animate={{ opacity: active ? 1 : 0 }}
    transition={{ duration: 0.2 }}
    style={{ pointerEvents: active ? 'auto' : 'none', backgroundColor: 'rgba(0,0,0,0.6)' }}
    className="overlay"
    onClick={() => routeHandler('/')}
  ></motion.div>
);
