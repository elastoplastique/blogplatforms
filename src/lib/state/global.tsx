import { create } from 'zustand';

export const useGlobal = create<UseFilters>((set, get) => ({
  features: [], // features subcollection data
  setFeatures: (features) => {
    return set({ features });
  },
  getFeature: (slug) => get().features.find((f: FeatureNode) => f.slug === slug),

  platformsByFeature: {},
  setSingleFeaturePlatforms: (slug: string, platforms: PlatformNode[]) => {
    const platformsByFeature = { ...get().platformsByFeature, [slug]: platforms };
    return set({ platformsByFeature });
  },
  getSingleFeaturePlatforms: (slug) => {
    return get().platformsByFeature[slug];
  },

  platformsToRender: [],
  setPlatformsToRender: (platforms: PlatformNode[]) => {
    return set({ platformsToRender: platforms });
  },

  featureToRender: null,
  setFeatureToRender: (f: FeatureNode) => set({ featureToRender: f }),
}));

export interface UseFilters {
  features: FeatureNode[]; // features subcollection data
  setFeatures: (features: FeatureNode[]) => void;
  getFeature: (slug: string) => FeatureNode;
  // feature subcollection data
  platformsByFeature: { [key: string]: PlatformNode[] };
  setSingleFeaturePlatforms: (slug: string, platforms: PlatformNode[]) => void;
  getSingleFeaturePlatforms: (slug: string) => PlatformNode[];

  platformsToRender: PlatformNode[];
  setPlatformsToRender: (platforms: PlatformNode[]) => void;

  featureToRender: FeatureNode | null;
  setFeatureToRender: (f: FeatureNode) => void;
}
