import axios from "axios";
import { useAuthStore } from "../../store/Auth/useAuthStore";

const api = axios.create({
    baseURL: "http://localhost:8000/api",
    withCredentials: true
});

api.interceptors.request.use(config => {
    const token = useAuthStore.getState().token
    config.headers.Authorization = `Bearer ${token}`
    return config;
})

export default api