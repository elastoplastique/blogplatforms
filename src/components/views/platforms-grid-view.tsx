/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useMemo } from 'react';
import { ListCardCover } from '@/components/compound/list-card-cover';
import { Flex, Grid } from '@/components/ui';
import { motion, AnimatePresence } from 'framer-motion';
import { useGlobal } from '@/lib/state/global';

// type Props = {
//   platforms: PlatformNode[];
//   // audiences: string[];
// };

export function PlatformsGridView() {
  const platformsToRender = useGlobal((state) => state.platformsToRender);
  return (
    <Flex
      direction={{
        initial: 'column',
        sm: 'row',
        md: 'row',
      }}
      align="stretch"
      className="min-w-full"
      id="platforms-grid-view"
    >
      {/* <Flex direction="row" align="stretch" grow="0" shrink="1" id="feature-box">

          </Flex> */}
      <Flex direction="column" align="stretch" grow="1" id="list-box">
        <Grid
          width="100%"
          asChild
          columns={{
            initial: '1',
            sm: '2',
            md: '2',
            lg: '3',
          }}
          style={{ minHeight: '70vh' }}
          p="1"
        >
          <motion.ul layout>
            <AnimatePresence>
              {platformsToRender &&
                platformsToRender.length > 0 &&
                platformsToRender.map((platform) => (
                  <motion.li
                    layout
                    key={platform.slug}
                    className="relative z-0 h-120 m-4 flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ easings: 'linear', duration: 0.3 }}
                  >
                    <ListCardCover platform={platform} />
                  </motion.li>
                ))}
            </AnimatePresence>
          </motion.ul>
        </Grid>
      </Flex>
    </Flex>
  );
}
