import {Container, Flex, Box, Heading, Text, List, ListItem, ListIcon, Link} from "@chakra-ui/react";
import {LabIcon} from "@/assets/constants.tsx";
import {MdCheckCircle, MdSettings} from "react-icons/md";

const LabPage = () => {
    return (
        <Container maxW="container.lg" py={10}>
            <Flex alignItems="center" textAlign="center" mb={6}>
                <LabIcon />
                <Heading as="h1" ml={1}>Laboratory</Heading>
            </Flex>
            <Text fontSize="xl">
                This is the <strong>Milky-Way</strong> laboratory!
            </Text>
            <Text fontSize="xl">
                Experiment with various functions and try new ideas
            </Text>
            <Text mt={4} fontSize="lg">
                A laboratory is always a place to explore and develop new things
            </Text>

            <Box fontSize={12} color='gray.500' mt={5} alignSelf='start'>
                © 2024 Built By
                <Link href='https://github.com/SuperRookiee/Milky-Way' target='_blank' color='blue.500' fontSize={14} mx={1}>
                    As a SuperRookiee
                </Link>
                Reference by
                <Link href='https://github.com/burakorkmez/instagram-clone' target='_blank' color='blue.500' fontSize={14} mx={1}>
                    burakorkmez
                </Link>
            </Box>

            <Box mt={20}>
                <Heading as="h2" fontSize="2xl" mb={4}>What&apos;s Next</Heading>
                <List spacing={3}>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='green.500' />
                        Lorem ipsum dolor sit amet, consectetur radicalising elit... (v0.0.1-release1)
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdSettings} color='green.500' />
                        Implementation of #hashtag functionality. 🏷️
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdSettings} color='green.500' />
                        Show current Followers & Following list. 🌰
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdSettings} color='green.500' />
                        Bug fixes & Improvements.🕵🏻‍
                    </ListItem>
                </List>
            </Box>
        </Container>
    );
};

export default LabPage;
