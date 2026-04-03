import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AppState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  
  items: string[];
  addItem: (item: string) => void;
  removeItem: (index: number) => void;
  clearItems: () => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),

      items: [],
      addItem: (item) => set((state) => ({ items: [...state.items, item] })),
      removeItem: (index) =>
        set((state) => ({
          items: state.items.filter((_, i) => i !== index),
        })),
      clearItems: () => set({ items: [] }),
    }),
    {
      name: "demo-storage", // unique name for localStorage
    }
  )
);
