import { Box, Container, Flex, Skeleton, SkeletonCircle, Text, VStack } from "@chakra-ui/react";
import FeedPost from "./FeedPost.jsx";
import useGetFeedPosts from "../../hooks/useGetFeedPosts.js";

const FeedPosts = () => {
	const { isLoading, posts } = useGetFeedPosts();

	return (
		<Container maxW={"container.sm"} py={10} px={2}>
			{isLoading &&
				[0, 1, 2].map((_, idx) => (
					<VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
						<Flex gap='2'>
							<SkeletonCircle size='10' />
							<VStack gap={2} alignItems={"flex-start"}>
								<Skeleton height='10px' w={"200px"} />
								<Skeleton height='10px' w={"200px"} />
							</VStack>
						</Flex>
						<Skeleton w={"full"}>
							<Box h={"400px"}>contents wrapped</Box>
						</Skeleton>
					</VStack>
				))}

			{!isLoading && posts.length > 0 && posts.map((post) => <FeedPost key={post.id} post={post} />)}
			{!isLoading && posts.length === 0 && (
				<>
					<Text fontSize={"md"} color={"white.400"}>
						아직 팔로우된 친구가 없어요!
					</Text>
					<Text color={"white.400"}>팔로우를 해서 더 많은 소식을 얻어보세요!!</Text>
				</>
			)}
		</Container>
	);
};

export default FeedPosts;
