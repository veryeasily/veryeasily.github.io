import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

interface State {
  headerHeight: number
  setHeaderHeight: (height: number) => void
}

export const useStore = create<State>()(
  devtools(
    immer((set) => ({
      headerHeight: 0,
      setHeaderHeight: (height) =>
        set((state) => {
          console.log("setHeaderHeight", height, state.headerHeight)
          state.headerHeight = height
        }),
    })),
  ),
)
