import {Box, Image} from "@chakra-ui/react";
import PostFooter from "./PostFooter.jsx";
import PostHeader from "./PostHeader.jsx";
import useGetUserProfileById from "../../hooks/useGetUserProfileById.js";
import useLikePost from "@/hooks/useLikePost.js";

const FeedPost = ({post}) => {
    const {userProfile} = useGetUserProfileById(post.createdBy);
    const { isLiked, likes, handleLikePost } = useLikePost(post);

    return (
        <>
            <PostHeader post={post} creatorProfile={userProfile}/>
            <Box my={2} borderRadius={4} overflow='hidden'>
                <Image src={post.imageURL} alt='FEED POST IMG'/>
            </Box>
            <PostFooter
                post={post}
                creatorProfile={userProfile}
                isLiked={isLiked}
                likes={likes}
                handleLikePost={handleLikePost}
            />
        </>
    );
};

export default FeedPost;
