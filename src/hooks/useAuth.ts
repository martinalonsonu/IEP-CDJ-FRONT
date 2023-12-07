import { authApi } from "../apis/authApi"
import { useAuthStore } from "../store/auth"

export const useAuth = () => {
    const token = useAuthStore(state => state.token)
    const setToken = useAuthStore(state => state.setToken)

    const login = async (email: string, password: string) => {
        try {
            const login = await authApi.login(email, password)
            setToken(login)
        } catch (error) {
            console.error(error);
        }
    }

    return {
        token,
        login
    }
}