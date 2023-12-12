import { create } from "zustand";

type State = {
    column: boolean,
    setColumn: () => void
}

export const useSidebarStore = create<State>((set) => ({
    column: false,
    setColumn: () => set((state) => ({
        column: !state.column
    }))
}))