import { useState } from 'react';

function TodoAdd({ onAdd, disabled }) {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    const trimmedTask = task.trim();
    if (!trimmedTask) return; // не додаємо пусті рядки
    onAdd(trimmedTask); // виклик твоєї функції onAdd з TodoManager
    setTask(''); // очищаємо поле після додавання
  };

  return (
    <div>
      <h2>Додати задачу</h2>
      <label>
        <input
          type="text"
          placeholder="Введіть задачу"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </label>
      <button onClick={handleAdd} disabled={disabled || task.trim() === ''}>
        Додати задачу
      </button>
    </div>
  );
}

export default TodoAdd;
