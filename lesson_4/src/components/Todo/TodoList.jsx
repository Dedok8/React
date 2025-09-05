import TodoItem from './TodoItem';

function TodoList({ taskList, setTaskList, onCompleted, onDelete }) {
  return (
    <div>
      <h2>Список задач</h2>
      {taskList.map((task) => (
        <TodoItem key={task.id} {...task} onCompleted={onCompleted} onDelete={onDelete} />
      ))}
      <hr />
      <button onClick={() => setTaskList([])}>Очистити лист</button>
    </div>
  );
}

export default TodoList;
