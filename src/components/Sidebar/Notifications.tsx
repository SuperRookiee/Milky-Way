import {Box, Flex, Tooltip} from "@chakra-ui/react";
import {AiOutlineHeart} from "react-icons/ai";

const Notifications = () => {

    return (
        <Tooltip hasArrow label='Notifications' placement='right' ml={1} openDelay={300}
                 display={{base: "block", md: "none"}}>
            <Flex alignItems='center' gap={4} _hover={{bg: "whiteAlpha.400"}} borderRadius={6} p={2}
                  w={{base: 10, md: "full"}} justifyContent={{base: "center", md: "flex-start"}}>
                <AiOutlineHeart size={25}/>
                <Box display={{base: "none", md: "block"}}>Notifications</Box>
            </Flex>
        </Tooltip>
    );
};

export default Notifications;
