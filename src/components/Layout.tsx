import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, HStack, IconButton } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useSidebar } from "../hooks/useSidebar";

const Layout = () => {
    const { column, collapseColumn } = useSidebar()
    return (
        <HStack w="full" h="100vh" bg="gray.100" padding={10}>
            <Flex as="aside" w="full" h="ful" maxW={column ? "350" : "100"} bg="white" alignItems="center" padding={6} flexDirection="column" justifyContent="space-betwee" borderRadius="15px" transition="ease-in-out .7s">
                <Sidebar />
            </Flex>
            <Flex as="main" w="full" h="full" bg="white" alignItems="center" justifyContent="center" flexDirection="column" position="relative" borderRadius="15px">
                <IconButton aria-label="Menu Collapse" icon={<HamburgerIcon />} position="absolute" top={6} left={6} onClick={() => collapseColumn()} />
                <Outlet />
            </Flex>
        </HStack>
    )
}

export default Layout