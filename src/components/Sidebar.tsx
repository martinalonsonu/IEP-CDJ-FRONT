import { Button } from '@chakra-ui/react'
import { RoutesMap } from '../routes/routes'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Sidebar = () => {
    const { logOut } = useAuth()
    const navigate = useNavigate()
    const handleNavigate = (pathname: string) => {
        navigate({ pathname: pathname })
    }

    const handleLogOut = () => {
        logOut()
        navigate({ pathname: RoutesMap.LOGIN })
    }

    return (
        <div>
            <Button onClick={() => handleNavigate('/home')}>Button Home</Button>
            <Button onClick={() => handleNavigate('/home2')}>Button Home2</Button>
            <Button onClick={handleLogOut}>Log out</Button>
        </div>
    )
}

export default Sidebar