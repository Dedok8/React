function TodoItem({ id, task, completed, onCompleted, onDelete }) {
  return (
    <div>
      <div>{task}</div>
      <div>{completed ? 'Виконано' : 'Не виконано'}</div>
      <div>
        <button onClick={() => onCompleted(id)}>Виконано</button>
        <button onClick={() => onDelete(id)}>Видалити</button>
      </div>
    </div>
  );
}

export default TodoItem;
