import { useState, useMemo, useEffect } from 'react';
import { Box, Flex, Grid, Button, IconButton, Text, RadioCards } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useGlobal } from '@/lib/state/global';
import Link from 'next/link';
import { X } from 'lucide-react';
import { InfoTooltip } from '@/components/compound/info-tooltip';
import { motion } from 'framer-motion';
import { ROUTES } from '@/constants/routes';
import { FEATURE_CATEGORY_COLORS } from '@/constants/features';
import { DEFAULT_COLOR } from '@/constants/colors';
import { useRouter } from 'next/router';

type Props = { platformFeatures: PlatformFeatureNode[] };

type OptionData = { [key: string]: any };

const getUniqueFeatures = (platformFeatures: PlatformFeatureNode[]) => {
  const features = platformFeatures.map((pf) => pf.feature);
  const uniqueFeatures = Array.from(new Set(features.map((f) => f.slug))).map((slug) => {
    return features.find((f) => f.slug === slug);
  });
  return uniqueFeatures;
};

export const SegmentedFeatures = ({ platformFeatures }: Props) => {
  const [featureSlug, setFeatureSlug] = useState<string>('');
  const uniqueFeatures = useMemo(() => getUniqueFeatures(platformFeatures), [platformFeatures]);
  const setPlatformsToRender = useGlobal((state) => state.setPlatformsToRender);

  const currentPlatforms = useMemo(() => {
    const platforms = platformFeatures
      .filter((pf: PlatformFeatureNode) => {
        return pf.feature.slug === featureSlug;
      })
      .map((pf: PlatformFeatureNode) => pf.platform);

    const result = platforms.length > 0 ? platforms : platforms;
    return result;
  }, [featureSlug]);

  const selectHandler = (featureSlug: string) => {
    setFeatureSlug(featureSlug);
  };

  useEffect(() => {
    setPlatformsToRender(currentPlatforms);
  }, [featureSlug]);
  return (
    <Flex align="start">
      <RadioCards.Root
        value={''}
        size="2"
        gap="1"
        className="relative !w-full z-0 flex flex-row flex-wrap justify-center items-center list-none"
        onValueChange={(value: string) => selectHandler(value)}
        columns={{ initial: '2', sm: '3', md: '4' }}
      >
        {uniqueFeatures.map((f: FeatureNode) => (
          <Flex direction="row" width="100%" justify="between" className="relative z-0" key={`feature-badge-${f.slug}`}>
            <RadioCards.Item
              value={f.slug}
              className="z-0 relative !w-full flex flex-row !justify-start"
              data-state={f.slug === featureSlug ? 'checked' : 'unchecked'}
            >
              <Text size="1">{f.title}</Text>
            </RadioCards.Item>
            <Link
              href={`${ROUTES.FEATURES_DIRECTORY.path}/${f.slug}`}
              className="!absolute right-2 top-3 !z-20 !cursor-pointer rounded-md border border-white flex flex-row justify-center items-center p-[2px]"
            >
              <MagnifyingGlassIcon width="18" height="18" />
            </Link>
          </Flex>
        ))}
      </RadioCards.Root>
    </Flex>
  );
};
