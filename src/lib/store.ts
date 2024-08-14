import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface State {
  headerHeight: number;
  setHeaderHeight: (height: number) => void;
}

export const useStore = create<State>()(
  immer((set) => ({
    headerHeight: 0,
    setHeaderHeight: (height) => set({ headerHeight: height }),
  })),
);
