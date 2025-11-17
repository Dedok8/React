import { useDeleteCommentMutation } from "@/entities/post/comments/api/commentApi";
import { useState } from "react";

function useDeleteComment() {
  const [deleteComment, { onSuccess }] = useDeleteCommentMutation();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteComment = async (id) => {
    setIsDeleting(true);
    try {
      await deleteComment(id).unwrap();
      onSuccess();
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  };

  return { handleDeleteComment, isDeleting };
}

export default useDeleteComment;
