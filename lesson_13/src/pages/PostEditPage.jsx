import { useParams } from "react-router";
import PostForm from "./PostsPage/PostForm";

const PostEditPage = () => {
  const { id } = useParams();
  return (
    <>
      <PostForm postId={id} />
    </>
  );
};

export default PostEditPage;
