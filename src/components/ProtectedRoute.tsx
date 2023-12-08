import { ReactNode } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { RoutesMap } from "../routes/routes"

interface Props {
    isAllowed: boolean,
    children?: ReactNode
}

export const ProtectedRoute = ({ isAllowed, children }: Props) => {
    if (!isAllowed) return <Navigate to={RoutesMap.LOGIN} />
    return children ? <>{children}</> : <Outlet />
}

export const PublicRoute = ({ isAllowed, children }: Props) => {
    if (!isAllowed) return <Navigate to={RoutesMap.HOME} />
    return children ? <>{children}</> : <Outlet />
}