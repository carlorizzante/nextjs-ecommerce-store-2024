import { create } from 'zustand';
import { Product } from '@/lib/types';

type PreviewModalStore = {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

export const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false, data: undefined }),
}));
