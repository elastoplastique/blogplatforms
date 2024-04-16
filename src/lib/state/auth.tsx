import { create } from 'zustand';

export const useAuth = create<UseAuth>((set, get) => ({
  user: null,

  setUser: (user) => {
    console.log('setting user:', user);
    return set({ user });
  },
}));

interface UseAuth {
  // feature subcollection data
  user: Auth0.Auth0User | null;
  setUser: (user: any) => void;
}
