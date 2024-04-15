import { create } from 'zustand';

interface UserState {
  email: string;
  id: string;
  name: string;
  setUser: (email: string, id: string, name: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
  email: '',
  id: '',
  name: '',
  setUser: (email, id, name) => set({ email, id, name }),
}));
