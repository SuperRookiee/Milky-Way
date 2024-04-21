import {Box, Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Tooltip, useDisclosure,} from "@chakra-ui/react";
import {FormEvent, useRef} from "react";
import useSearchUser from "@/hooks/useSearchUser";
import {AiOutlineSearch} from "react-icons/ai";
import SuggestedUser from "@/components/SuggestedUsers/SuggestedUser";

const Search = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const searchRef = useRef<HTMLInputElement>(null);
    const {user, isLoading, getUserProfile, setUser} = useSearchUser();

    const handleSearchUser = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        getUserProfile(searchRef.current?.value);
    };

    return (
        <>
            <Tooltip hasArrow label='Search' placement='right' ml={1} openDelay={300}
                     display={{base: "block", md: "none"}}>
                <Flex alignItems='center' gap={4} _hover={{bg: "whiteAlpha.400"}} borderRadius={6} p={2}
                      w={{base: 10, md: "full"}} justifyContent={{base: "center", md: "flex-start"}} onClick={onOpen}>
                    <AiOutlineSearch size={25}/>
                    <Box display={{base: "none", md: "block"}}>Search</Box>
                </Flex>
            </Tooltip>

            <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInLeft' isCentered>
                <ModalOverlay/>
                <ModalContent border='1px solid gray' maxW='400px'>
                    <ModalHeader>Search user</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody pb={6}>
                        <form onSubmit={handleSearchUser}>
                            <FormControl>
                                <FormLabel>Username</FormLabel>
                                <Input placeholder='asaprogrammer' ref={searchRef}/>
                            </FormControl>

                            <Flex w='full' justifyContent='flex-end'>
                                <Button type='submit' ml='auto' size='sm' my={4} isLoading={isLoading}>
                                    Search
                                </Button>
                            </Flex>
                        </form>
                        {user && <SuggestedUser user={user} setUser={setUser}/>}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Search;
