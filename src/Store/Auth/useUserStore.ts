import { create } from 'zustand';

export const useUserStore = create<UserState>((set) => ({
  email: '',
  id: '',
  name: '',
  setUser: (email, id, name) => set({ email, id, name }),
}));
