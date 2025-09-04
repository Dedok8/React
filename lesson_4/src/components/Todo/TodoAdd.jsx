import { useState } from "react";

function TodoAdd({ onAdd }) {
  const [task, setTask] = useState("");

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
      <button onClick={() => onAdd(task)}>Додати задачу</button>
    </div>
  );
}

export default TodoAdd;
