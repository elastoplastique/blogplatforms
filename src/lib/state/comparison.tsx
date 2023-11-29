import { create } from 'zustand';

export const useComparison = create<UseComparison>((set, get) => ({
  platformSlugs: { first: null, second: null },
  setFirstSlug: (platformSlug: string) => {
    return set({ platformSlugs: { ...get().platformSlugs, first: platformSlug } });
  },
  setSecondSlug: (platformSlug: string) => {
    return set({ platformSlugs: { ...get().platformSlugs, second: platformSlug } });
  },

  //   setPlatformSlug: (platformSlug: string) => {
  //     const { first, second } = get().platformSlugs;
  //     if (!first) {
  //       return set({ platformSlugs: { first: platformSlug, second } });
  //     } else {
  //       let firstSlug = platformSlug < first ? platformSlug : first;
  //       let secondSlug = platformSlug > first ? platformSlug : first;
  //       return set({ platformSlugs: { first: firstSlug, second: secondSlug } });
  //     }
  //   },
}));

export interface UseComparison {
  platformSlugs: { first: string | null; second: string | null };
  setFirstSlug: (platformSlug: string) => void;
  setSecondSlug: (platformSlug: string) => void;
  //   setPlatformSlug: (platformSlug: string) => void;
}
