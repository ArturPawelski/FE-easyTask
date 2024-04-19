import { create } from 'zustand';

export const useResendVerificationModalStore = create<ResendVerificationModalState>((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));
