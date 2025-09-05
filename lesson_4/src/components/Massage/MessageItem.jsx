import styles from '../style/message.module.css';

function MessageItem({ message, handleMsgType }) {
  return (
    <div>
      {message.map((el) => (
        <div key={el.id} className={styles.messageItem}>
          <div className={styles.messageItemText}>
            <p>{el.text}</p>
          </div>
          <div className={styles.messageItemBtn}>
            <div>
              <button onClick={() => handleMsgType(el.id, 'like')} className={styles.messageBtn}>
                Like
              </button>
              <span className={styles.messageItemSpan}>{el.like}</span>
            </div>
            <div>
              <button onClick={() => handleMsgType(el.id, 'dislike')} className={styles.messageBtn}>
                Dislike
              </button>
              <span className={styles.messageItemSpan}>{el.dislike}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MessageItem;
