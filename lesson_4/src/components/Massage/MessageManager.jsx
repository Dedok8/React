// Приклад. Створити імітатор мессенджера.
// Є можливість додавати/відображати повідомлення і ставити лайки (додайте стилі на свій розсуд).

import { useState } from "react";
import MessageItem from "./MessageItem";
import MessageAdd from "./MessageAdd";
import { messageList } from "./MessageList";
import styles from "../style/message.module.css";

function MessageManager() {
  const [message, setMessage] = useState(messageList);
  const [msgValue, setMsgValue] = useState("");

  const addMessage = () => {
    if (msgValue.trim() === "") return;
    setMessage([
      ...message,
      {
        id: new Date().getTime(),
        text: msgValue,
        like: 0,
        dislike: 0,
      },
    ]);
    setMsgValue("");
  };

  const handleMsgType = (id, type) => {
    setMessage(
      message.map((msg) =>
        msg.id === id
          ? {
              ...msg,
              like: type === "like" ? msg.like + 1 : msg.like,
              dislike: type === "dislike" ? msg.dislike + 1 : msg.dislike,
            }
          : msg
      )
    );
  };

  return (
    <div className={styles.managerContainer}>
      <MessageItem message={message} handleMsgType={handleMsgType} />
      <MessageAdd
        addMessage={addMessage}
        msgValue={msgValue}
        setMsgValue={setMsgValue}
      />
    </div>
  );
}

export default MessageManager;
