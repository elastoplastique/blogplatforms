import { create } from 'zustand';

export const useGlobal = create<UseFilters>((set, get) => ({
  activeFeature: null,
  features: [], // features subcollection data
  activePlatform: null,

  setFeatures: (features) => {
    return set({ features });
  },

  platforms: [], // features subcollection data
  setPlatforms: (platforms: PlatformNode[]) => {
    return set({ platforms });
  },
}));

type Func = (p: PlatformNode, selected: string) => boolean;

export interface UseFilters {
  // feature subcollection data
  platforms: FeatureNode[];
  activePlatform: FeatureNode | null;
  features: FeatureNode[];
  activeFeature: FeatureNode | null;

  setFeatures: (features: FeatureNode[]) => void;
  setPlatforms: (features: FeatureNode[]) => void;
}
