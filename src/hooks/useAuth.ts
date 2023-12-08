import { authApi } from "../apis/authApi"
import { useAuthStore } from "../store/Auth/useAuthStore"

export const useAuth = () => {
    const token = useAuthStore(state => state.token)
    const setToken = useAuthStore(state => state.setToken)
    const user = useAuthStore(state => state.user)
    const setProfile = useAuthStore(state => state.setProfile)
    const userStatus = useAuthStore(state => state.status)

    const setProfileData = async (token: string) => {
        try {
            const data = await authApi.profile(token)
            setProfile(data.data)
        } catch (error) {
            console.error(error);
        }
    }

    const login = async (email: string, password: string) => {
        try {
            const login = await authApi.login(email, password)
            if (login.token) {
                await setToken(login.token)
                await setProfileData(login.token)
                return true
            }
        } catch (error) {
            console.error(error);
        }
    }



    return {
        token,
        user,
        userStatus,
        login
    }
}