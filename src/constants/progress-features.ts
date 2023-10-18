import type { Rating } from '@/types/wix/cms';
import { DesignToolsIcon, RankingIcon, ColorSwatchIcon, ThreeDIcon, UserCircleAddIcon } from '@/components/icons/bold-icons';

type ProgressFeatureValueType = Record<Rating, number>;

export const PROGRESS_MAX = 100;
export const PROGRESS_BEST = 'Best';

export const PPROGRESS_FEATURE_VALUES: ProgressFeatureValueType = {
  None: 0,
  Low: 25,
  Medium: 50,
  High: 75,
  [PROGRESS_BEST]: 100,
};

export const PROGRESS_FEATURE_ICONS = {
  'Theme Availability': ColorSwatchIcon,
  'SEO Capabilities': RankingIcon,
  'Design Flexibility': DesignToolsIcon,
  'User-Friendliness': UserCircleAddIcon,
  Versatility: ThreeDIcon,
};
