/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { ListCardCover } from '@/components/compound/list-card-cover';
import { Flex, Grid, Section } from '@/components/ui';
import { motion, AnimatePresence } from 'framer-motion';
import { useGlobal } from '@/lib/state/global';

// type Props = {
//   platforms: PlatformNode[];
//   // audiences: string[];
// };

export function PlatformsGridView() {
  const platformsToRender = useGlobal((state) => state.platformsToRender);

  return (
    <motion.section className="py-4">
      <Grid
        width="100%"
        asChild
        columns={{
          initial: '1',
          sm: '2',
          md: '2',
          lg: '3',
        }}
        style={{ minHeight: '40vh' }}
        gap="3"
        p="0"
      >
        <motion.ul layoutScroll>
          <AnimatePresence>
            {platformsToRender &&
              platformsToRender.length > 0 &&
              platformsToRender
                .sort((a, b) => a.order - b.order)
                .map((platform) => (
                  <motion.li
                    layout
                    layoutId={`platform-${platform.slug}`}
                    id={`platform-${platform.slug}`}
                    key={`platform-${platform.slug}`}
                    className="relative z-0 h-120 flex flex-col items-center"
                    style={{ width: '100%', height: '100%', minHeight: 410 }}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ easings: 'linear', duration: 0.3 }}
                  >
                    <ListCardCover platform={platform} />
                  </motion.li>
                ))}
          </AnimatePresence>
        </motion.ul>
      </Grid>
    </motion.section>
  );
}
