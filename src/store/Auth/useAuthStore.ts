import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthStatus } from "../../types/store/AuthStatus";
import { AuthState } from "../../types/store/AuthStore";
import { userType } from "../../types/store/AuthStore";


export const useAuthStore = create<AuthState>()(persist((set) => ({
    token: '',
    user: {} as userType,
    status: AuthStatus.NOT_AUTHENTICATED,
    setToken: (token: string) => set((state) => ({
        token,
        status: AuthStatus.AUTHENTICATED,
    })),
    setProfile: (dataProfile: userType) => set((state) => ({
        user: dataProfile
    }))
}), {
    name: 'auth'
}))