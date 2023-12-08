import { Route, Routes } from 'react-router-dom'
import { RoutesMap } from './routes/routes'
import { ProtectedRoute, PublicRoute } from './components/ProtectedRoute'
import { Toaster } from "react-hot-toast";
import { AuthStatus } from './store/Auth/useAuthStore'
import { useAuth } from './hooks/useAuth'
import Login from './views/Login/Login'
import Home from './views/Home/Home'
import Home2 from './views/Home/Home2'

function App() {
    const { userStatus } = useAuth()

    return (
        <>
            <Routes>
                {/* Rutas de acceso total */}
                <Route element={<PublicRoute isAllowed={userStatus === AuthStatus.NOT_AUTHENTICATED || userStatus === AuthStatus.AUTHENTICATED} />}>
                    <Route path={RoutesMap.HOME2} element={<Home2 />} />
                </Route>
                {/* Rutas de acceso solo a no autenticados, los autenticados no pueden acceder */}
                <Route element={<PublicRoute isAllowed={userStatus === AuthStatus.NOT_AUTHENTICATED} />}>
                    <Route path={RoutesMap.LOGIN} element={<Login />} />
                </Route>
                {/* Rutas de acceso solo a autenticados */}
                <Route element={<ProtectedRoute isAllowed={userStatus === AuthStatus.AUTHENTICATED} />}>
                    <Route path={RoutesMap.HOME} element={<Home />} />
                </Route>
            </Routes>
            <Toaster
                position="top-right"
                reverseOrder={false}
                toastOptions={{
                    style: {
                        background: "#DBDBDB",
                        color: "#373737",
                    },
                }}
            />
        </>
    )
}

export default App
