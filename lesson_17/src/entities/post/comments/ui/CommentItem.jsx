import React, { useState } from "react";
import { useDeleteCommentMutation } from "../api/commentApi";
import { useSelector } from "react-redux";
import DeleteCommentBtn from "@/features/comment/delete-comment/ui/DeleteCommentBtn";

export function CommentItem({ comment }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteComment] = useDeleteCommentMutation();

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteComment(comment.id).unwrap();
    } catch (e) {
      console.log(e);

      // handle error if needed
    }
  };
  const user = useSelector((state) => state.auth.user);
  return (
    <div
      style={{
        borderBottom: "1px solid #ddd",
        padding: "5px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span>
        <b>{comment.authorName}</b>: {comment.text}
        {isDeleting && (
          <span style={{ marginLeft: 8, color: "#888" }}>Видаляється...</span>
        )}
      </span>

      {user && (
        <DeleteCommentBtn
          handleDeleteComment={handleDelete}
          isDeleting={isDeleting}
        />
      )}
    </div>
  );
}
// ...existing code...
