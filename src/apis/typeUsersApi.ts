import api from "./configs/axiosConfig"

export const typeUsersApi = {
    getTypeUsers: async () => {
        const response = await api.get('/user/type')
            .then(response => response.data)
            .catch((error) => {
                console.error(error)
                return error.response.data
            })
        return response
    },
}