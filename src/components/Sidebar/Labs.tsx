import {Box, Link, Tooltip} from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";
import {LabIcon} from "@/assets/constants.tsx";

const Labs = () => {
    return (
        <Tooltip hasArrow label='Home' placement='right' ml={1} openDelay={300} display={{ base: "block", md: "none" }}>
            <Link display='flex' to='/labs' as={RouterLink} alignItems='center' gap={4} _hover={{ bg: "whiteAlpha.400" }} borderRadius={6} p={2} w={{ base: 10, md: "full" }} justifyContent={{ base: "center", md: "flex-start" }}>
                <LabIcon />
                <Box display={{ base: "none", md: "block" }}>Labs</Box>
            </Link>
        </Tooltip>
    );
};

export default Labs;
