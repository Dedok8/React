// Приклад. Створення Списку Завдань (TODO List)
// Створіть простий додаток для управління списком завдань (TODO list).
// 1. Відображення завдань: Кожне завдання має відображатися як окремий елемент списку.
// 2. Дії над завданнями: Поруч з кожним завданням мають бути дві кнопки:
// • "Виконано": Позначає завдання як виконане.
// • "Видалити": Видаляє завдання зі списку.
// 3. Взаємодія компонентів:
// • Основний компонент (App) керує станом всього списку завдань.
// • Кожне окреме завдання має відображатися як дочірній компонент (TodoItem).
// • TodoItem повинен отримувати функції-колбеки від App для обробки натискань кнопок "Виконано" та "Видалити",
// а також ID завдання, щоб App міг знати, яке саме завдання потрібно оновити/видалити.

// 4. ДОДАТИ ФОРМУ ДОДАВАННЯ ЗАВДАНЬ

import { useState } from 'react';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

function TodoManager() {
  const [tasksList, setTasksList] = useState([
    { id: 1, task: 'Закінчити презентацію', completed: false },
    { id: 2, task: 'Перевірити макроси у PowerPoint', completed: false },
    { id: 3, task: 'Налаштувати VBA у Excel', completed: true },
  ]);

  const onCompleted = (id) => {
    setTasksList((prevEl) =>
      prevEl.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: true,
            }
          : task,
      ),
    );
  };

  const onDelete = (id) => {
    setTasksList((prevEl) => prevEl.filter((el) => el.id !== id));
  };

  const onAdd = (newTask) => {
    setTasksList((prevEl) => [
      ...prevEl,
      {
        id: new Date().getTime(),
        task: newTask,
        completed: false,
      },
    ]);
  };

  return (
    <>
      <TodoAdd onAdd={onAdd} />
      <hr />
      <TodoList
        taskList={tasksList}
        onCompleted={onCompleted}
        onDelete={onDelete}
        setTaskList={setTasksList}
        disabled={tasksList !== ''}
      />
    </>
  );
}

export default TodoManager;
