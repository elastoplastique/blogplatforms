import { create } from 'zustand';

export const useGlobal = create<UseFilters>((set, get) => ({
  features: [], // features subcollection data
  platforms: [], // features subcollection data

  setFeatures: (features) => {
    return set({ features });
  },

  setPlatforms: (platforms: PlatformNode[]) => {
    return set({ platforms });
  },
}));

type Func = (p: PlatformNode, selected: string) => boolean;

interface UseFilters {
  // feature subcollection data
  features: FeatureNode[];
  setFeatures: (features: FeatureNode[]) => void;
  platforms: FeatureNode[];
  setPlatforms: (features: FeatureNode[]) => void;
}
