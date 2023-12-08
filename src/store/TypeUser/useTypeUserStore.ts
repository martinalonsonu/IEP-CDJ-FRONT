import { create } from "zustand";

type DataTypeUsers = {
    id: number,
    name: string
}

type State = {
    typeUsers: DataTypeUsers[],
    setTypeUsers: (types: DataTypeUsers[]) => void
}

export const useTypeUserStore = create<State>((set) => ({
    typeUsers: [],
    setTypeUsers: (typeUsers: DataTypeUsers[]) => set((state) => ({
        typeUsers
    }))
}))