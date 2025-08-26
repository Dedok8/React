// 4. Вивести список як маркований список з елементами у форматі (name: salary)

const workersList2 = [
  { id: "111", name: "Іванов", salary: 10000 },
  { id: "112", name: "Петров", salary: 20000 },
  { id: "113", name: "Сидоров", salary: 50000 },
];

const MarkList = () => {
  return (
    <ul>
      {workersList2.map((worker) => (
        <li key={worker.id} style={{ textAlign: "start" }}>
          Name: {worker.name} - Salary {worker.salary} грн
        </li>
      ))}
    </ul>
  );
};

export default MarkList;
