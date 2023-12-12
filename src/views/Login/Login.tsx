import { ExternalLinkIcon, LockIcon, UnlockIcon } from "@chakra-ui/icons"
import { Button, Checkbox, Flex, FormControl, FormLabel, HStack, Heading, Image, Input, InputGroup, InputRightElement, Link, Select, Spinner, Stack, Tooltip } from "@chakra-ui/react"
import { ChangeEvent, useEffect, useState } from "react"
import { useAuth } from "../../hooks/useAuth"
import { useTypeUser } from "../../hooks/useTypeUsers"
import { useNavigate } from "react-router-dom"
import { RoutesMap } from "../../routes/routes"
import { CustomToast } from "../../components/CustomToast"
import fondo from "../../assets/fondo.jpg"

interface DataLogin {
    email: string,
    password: string,
    typeUser: number,
}

const Login = () => {
    const { login } = useAuth()
    const { getTypeUsers, typeUsers } = useTypeUser()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<DataLogin>({
        email: '',
        password: '',
        typeUser: 0
    })

    useEffect(() => {
        getTypeUsers()
    }, [])

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value })
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = async () => {
        setLoading(true)
        try {
            if (!data.email) return CustomToast("error", "Ingrese su email") && setLoading(false)
            if (!data.password) return CustomToast("error", "Ingrese su contraseña") && setLoading(false)
            if (!data.typeUser) return CustomToast("error", "Seleccione su tipo de usuario") && setLoading(false)
            const response = await login(data.email, data.password, Number(data.typeUser))
            if (response) {
                setLoading(false)
                navigate({ pathname: RoutesMap.HOME })
                CustomToast("success", "¡Sesión iniciada con éxito!")
            } else {
                setLoading(false)
                return CustomToast("error", "Sucedió un problema al iniciar sesión, vuelve a intentarlo.")
            }
        } catch (error) {
            setLoading(false)
        }

    }

    return (
        <HStack w="full" h="100vh">
            <Flex w="full" h="full" borderRightWidth={1} display={{ base: "none", md: "flex" }}>
                <Image objectFit="cover" w="full" h="full" src={fondo} />
            </Flex>
            <Flex w="full" h="full" alignItems={'center'} justifyContent={'center'}>
                <Stack w="full" maxW="md" spacing={4} p={6}>
                    <Heading fontSize="2xl" color="red.500">
                        INTRANET CORAZONISTA
                    </Heading>
                    <FormControl>
                        <FormLabel>Correo Electrónico:</FormLabel>
                        <Input id="email" name="email" placeholder="ejemplo@colegio.com" value={data.email} onChange={handleChange} maxLength={30} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Contraseña:</FormLabel>
                        <InputGroup>
                            <Input id="password" name="password" type={showPassword ? 'text' : 'password'} placeholder="Tu contraseña" value={data.password} onChange={handleChange} maxLength={12} />
                            <InputRightElement width='4.5rem'>
                                <Tooltip hasArrow bg='gray.300' color='gray.600' label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}>
                                    <Button onClick={handleShowPassword} style={{ backgroundColor: 'transparent' }}>
                                        {showPassword ? <UnlockIcon /> : <LockIcon />}
                                    </Button>
                                </Tooltip>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tipo de usuario:</FormLabel>
                        <Select id="typeUser" name="typeUser" placeholder="Seleccione una opción" value={data.typeUser} onChange={handleChange}>
                            {typeUsers.map((types) => (
                                <option key={types.id} value={types.id}>{types.name}</option>
                            ))}
                        </Select>
                    </FormControl>
                    <Button disabled={loading} colorScheme="red" onClick={handleSubmit}>{loading ? <Spinner /> : "Iniciar sesión"}</Button>
                    <Stack spacing={4} direction="row" align="start" justify="space-between">
                        <Checkbox colorScheme="red">Recuérdame</Checkbox>
                        <Link color="red.500">Olvidé mi contraseña<ExternalLinkIcon mx='2px' /></Link>
                    </Stack>
                </Stack>
            </Flex>
        </HStack>
    )
}

export default Login