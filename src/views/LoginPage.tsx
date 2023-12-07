import { FormEvent } from "react"
import { useAuth } from "../hooks/useAuth"

const LoginPage = () => {
    const { token, login } = useAuth()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const email = (e.currentTarget.elements[0] as HTMLInputElement).value
        const password = (e.currentTarget.elements[1] as HTMLInputElement).value
        login(email, password)
    }
    console.log(token)
    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="email@mail.com" />
            <input type="password" placeholder="*****" />
            <button>
                Login
            </button>
        </form>
    )
}

export default LoginPage