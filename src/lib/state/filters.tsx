import { create } from 'zustand';

export const useFilters = create<UseFilters>((set, get) => ({
  features: [], // features subcollection data
  setFeatures: (features) => {
    return set({ features });
  },

  platforms: [],
  setPlatforms: (platforms: PlatformNode[]) => {
    return set({ platforms });
  },

  filteredPlatforms: [],

  options: {},
  addOptionSet: (key, options, func) => {
    set((state) => ({
      options: { ...state.options, [key]: options },
      funcs: { ...state.funcs, [key]: func },
    }));
  },

  funcs: {},

  selecteds: {},
  setSelected: (option: string, selected: string) => {
    const selecteds = { ...get().selecteds, [option]: selected };
    const filteredPlatforms = get().filterPlatforms(selecteds);
    return set(() => ({
      selecteds: selecteds,
      filteredPlatforms: filteredPlatforms.length > 0 ? filteredPlatforms : get().platforms,
    }));
  },
  removeSelected: (option: string) => {
    const selecteds = {};
    Object.keys(get().selecteds).forEach((key: string) => {
      if (key !== option) {
        (selecteds as any)[key] = get().selecteds[key];
      }
    });
    const filteredPlatforms = get().filterPlatforms(selecteds);
    console.log('removing selected');
    console.log('selecteds', selecteds);
    return set(() => ({
      selecteds: selecteds,
      filteredPlatforms: filteredPlatforms.length > 0 ? filteredPlatforms : get().platforms,
    }));
  },

  // This function must be called within setSelected or removeSelected methods
  filterPlatforms: (selecteds) => {
    let existingPlatforms = get().platforms;

    // iterate existing selections and pipe them through the filter function
    Object.keys(selecteds).forEach((selectionKey: string) => {
      const filterFunc = get().funcs[selectionKey];
      const currentOptionSelection = selecteds[selectionKey];
      existingPlatforms = existingPlatforms.filter((p: PlatformNode) => filterFunc(p, currentOptionSelection));
    });

    return existingPlatforms;
  },

  getOptionSelections: (option: string) => {
    return get().selecteds[option];
  },
}));

type Func = (p: PlatformNode, selected: string) => boolean;
interface UseFilters {
  // feature subcollection data
  features: FeatureNode[];
  setFeatures: (features: FeatureNode[]) => void;

  // platform subcollection data
  platforms: PlatformNode[];
  filteredPlatforms: PlatformNode[];
  options: { [key: string]: string[] };
  funcs: { [key: string]: Func };
  selecteds: { [key: string]: string };
  setPlatforms: (platforms: PlatformNode[]) => void;
  addOptionSet: (key: string, options: string[], func: Func) => void;
  setSelected: (option: string, selected: string) => void;
  removeSelected: (option: string) => void;
  filterPlatforms: (selecteds: { [key: string]: string }) => PlatformNode[];
  getOptionSelections: (option: string) => string;
}
