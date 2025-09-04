function MessageItem({ id, text, like, dislike, message, handleMsgType }) {
  return (
    <div>
      {message.map((el) => (
        <div key={el.id}>
          <p>{el.text}</p>
          <div>
            <div>
              <button onClick={() => handleMsgType(el.id, "like")}>Like</button>
              <span>{el.like}</span>
            </div>
            <div>
              <button onClick={() => handleMsgType(el.id, "dislike")}>
                Dislike
              </button>
              <span>{el.dislike}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MessageItem;
