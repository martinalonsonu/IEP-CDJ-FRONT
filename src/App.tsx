import { Route, Routes, useLocation } from 'react-router-dom'
import { RoutesMap } from './routes/routes'
import { ProtectedRoute, PublicRoute } from './components/ProtectedRoute'
import { Toaster } from "react-hot-toast";
import { AuthStatus } from './types/store/AuthStatus';
import { useAuth } from './hooks/useAuth'
import Login from './views/Login/Login'
import Home from './views/Home/Home'
import Home2 from './views/Home/Home2'
import Layout from './components/Layout';

function App() {
    const { userStatus } = useAuth()
    const { pathname } = useLocation()

    return (
        <>
            <Routes>
                {/* Rutas de acceso total */}
                <Route element={<PublicRoute isAllowed={true} />}>
                </Route>
                {/* Rutas de acceso solo a no autenticados, los autenticados no pueden acceder */}
                <Route element={<PublicRoute isAllowed={userStatus === AuthStatus.NOT_AUTHENTICATED} />}>
                    <Route path={RoutesMap.LOGIN} element={<Login />} />
                </Route>
                {/* Rutas de acceso solo a autenticados */}
                <Route element={<Layout />}>
                    <Route element={<ProtectedRoute isAllowed={userStatus === AuthStatus.AUTHENTICATED} />}>
                        <Route path={RoutesMap.HOME2} element={<Home2 />} />
                        <Route path={RoutesMap.HOME} element={<Home />} />
                    </Route>
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
