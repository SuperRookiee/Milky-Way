import {Box, Button, CloseButton, Flex, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, Tooltip, useDisclosure,} from "@chakra-ui/react";
import {useRef, useState} from "react";
import {CreatePostLogo} from "@/assets/constants.tsx";
import useCreatePost from "@/hooks/useCreatePost.js";
import usePreviewImg from "@/hooks/usePreviewImg.js";
import useShowToast from "@/hooks/useShowToast.js";
import {BsFillImageFill} from "react-icons/bs";

const CreatePost = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [caption, setCaption] = useState("");
	const imageRef = useRef(null);
	const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();
	const showToast = useShowToast();
	const { isLoading, handleCreatePost } = useCreatePost();

	const handlePostCreation = async () => {
		try {
			await handleCreatePost(selectedFile, caption);
			onClose();
			setCaption("");
			setSelectedFile(null);
		} catch (error) {
			showToast("Error", error.message, "error");
		}
	};

	return (
		<>
			<Tooltip hasArrow label='Create' placement='right' ml={1} openDelay={300} display={{ base: "block", md: "none" }}>
				<Flex alignItems='center' gap={4} _hover={{ bg: "whiteAlpha.400" }} borderRadius={6} p={2} w={{ base: 10, md: "full" }} justifyContent={{ base: "center", md: "flex-start" }} onClick={onOpen}>
					<CreatePostLogo/>
					<Box display={{ base: "none", md: "block" }}>Create</Box>
				</Flex>
			</Tooltip>

			<Modal isOpen={isOpen} onClose={onClose} size='xl' isCentered>
				<ModalOverlay />

				<ModalContent border='1px solid gray'>
					<ModalHeader>Create Post</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<Input type='file' hidden ref={imageRef} onChange={handleImageChange} />
						{selectedFile ?
							<Flex my={5} w='full' position='relative' justifyContent='center'>
								<Image src={selectedFile} alt='Selected img' />
								<CloseButton position='absolute' top={2} right={2} onClick={() => setSelectedFile(null)}/>
							</Flex>
							:
							<BsFillImageFill onClick={() => imageRef.current.click()} style={{ marginBottom: "15px", marginLeft: "5px", cursor: "pointer" }} size={20}/>
						}
						<Textarea placeholder='Post caption...' height={150} value={caption} onChange={(e) => setCaption(e.target.value)}/>
					</ModalBody>

					<ModalFooter>
						<Button mr={3} onClick={handlePostCreation} isLoading={isLoading}>
							Post
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default CreatePost;
