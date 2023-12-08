import api from "./configs/axiosConfig";
const typeUserId = 5;

export const authApi = {
    login: async (email: string, password: string) => {
        const response = await api.post('/auth/login', { email, password, typeUserId })
            .then(response => response.data)
            .catch((error) => {
                console.error(error)
                return error.response.data
            })
        return response
    },

    profile: async (token: string) => {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        const response = await api.post('/auth/me')
            .then(response => response.data)
            .catch((error) => {
                console.error(error)
                return error.response.data
            })
        return response
    }
}