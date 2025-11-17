function DeleteCommentBtn({ handleDeleteComment, isDeleting }) {
  return (
    <button onClick={handleDeleteComment} disabled={isDeleting}>
      Видалити
    </button>
  );
}

export default DeleteCommentBtn;
