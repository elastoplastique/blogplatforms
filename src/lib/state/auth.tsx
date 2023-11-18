import { create } from 'zustand';

export const useAuth = create<UseAuth>((set, get) => ({
  user: null,

  setUser: (user) => {
    return set({ user });
  },
}));

interface UseAuth {
  // feature subcollection data
  user: any;
  setUser: (user: any) => void;
}
