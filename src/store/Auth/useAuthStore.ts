import { create } from "zustand";
import { persist } from "zustand/middleware";

export enum AuthStatus {
    LOGGING_IN = 'logging_in',
    VERIFYING = 'verifying',
    AUTHENTICATED = 'authenticated',
    NOT_AUTHENTICATED = 'not-authenticated'
}

type State = {
    token: string,
    user: any,
    status: AuthStatus,
    setToken: (token: string) => void,
    setProfile: (dataProfile: any) => void
}

export const useAuthStore = create<State>()(persist((set) => ({
    token: '',
    user: null,
    status: AuthStatus.NOT_AUTHENTICATED,
    setToken: (token: string) => set((state) => ({
        token,
        status: AuthStatus.AUTHENTICATED,
    })),
    setProfile: (dataProfile: any) => set((state) => ({
        user: dataProfile
    }))
}), {
    name: 'auth'
}))