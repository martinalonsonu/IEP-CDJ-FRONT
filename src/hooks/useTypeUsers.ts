import { typeUsersApi } from "../apis/typeUsersApi"
import { useTypeUserStore } from "../store/TypeUser/useTypeUserStore"

export const useTypeUser = () => {
    const typeUsers = useTypeUserStore(state => state.typeUsers)
    const setTypeUsers = useTypeUserStore(state => state.setTypeUsers)

    const getTypeUsers = async () => {
        try {
            const typeUsers = await typeUsersApi.getTypeUsers()
            if (!typeUsers.error) {
                setTypeUsers(typeUsers.data)
            }
        } catch (error) {
            console.error(error);
        }
    }

    return {
        typeUsers,
        getTypeUsers
    }
}