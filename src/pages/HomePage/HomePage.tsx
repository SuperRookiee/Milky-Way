import {Box, Container, Flex} from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPosts/FeedPosts.jsx";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers.jsx";

const HomePage = () => {
    return (
        <Container maxW='container.lg'>
            <Flex gap={20}>
                <Box flex={2} py={5}>
                    <FeedPosts/>
                </Box>
                <Box flex={3} py={5} mr={20} display={{base: "none", lg: "block"}} maxW='300px'>
                    <SuggestedUsers/>
                </Box>
            </Flex>
        </Container>
    );
};

export default HomePage;
