function MessageAdd({ addMessage, msgValue, setMsgValue }) {
  const btnDisabled = msgValue.trim() === "";
  return (
    <div>
      <label>
        <input
          type="text"
          placeholder="Введіть повідомленя"
          value={msgValue}
          onChange={(e) => setMsgValue(e.target.value)}
        />
      </label>
      <button onClick={() => addMessage(msgValue)} disabled={btnDisabled}>
        Додати повідомлення
      </button>
    </div>
  );
}

export default MessageAdd;
