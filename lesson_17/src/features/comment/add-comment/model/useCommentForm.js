import { useCreateCommentMutation } from "@/entities/post/comments/api/commentApi";
import { useState } from "react";

function useCommentForm({ postId }) {
  const [content, setContent] = useState("");
  const [createComment, { isLoading }] = useCreateCommentMutation();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    await createComment({ postId, text: content }).unwrap();
    setContent("");
  };

  return {
    content,
    setContent,
    onSubmit,
    isLoading,
  };
}

export default useCommentForm;
