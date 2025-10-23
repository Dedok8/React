import PostsItemCart from "./PostsItemCart";

function PostsList({ postsList, onDeletePost }) {
  return (
    <>
      {postsList.length ? (
        <div>
          {postsList.map((post) => (
            <PostsItemCart
              key={post.id}
              postsData={post}
              onDeletePost={onDeletePost}
            />
          ))}
        </div>
      ) : (
        <div>Список порожній</div>
      )}
    </>
  );
}

export default PostsList;
