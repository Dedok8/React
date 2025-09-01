import { useState } from "react";

function FindWorker() {
  const employeesList = [
    "Іван Іванов",
    "Петро Петренко",
    "Олег Сидоренко",
    "Михайло Коваленко",
    "Андрій Шевченко",
    "Катерина Литвин",
  ];

  const [search, setSearch] = useState("");

  const employeesFind = employeesList.filter((employees) =>
    employees.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div>
        <label>
          Введіть ім'я:
          <input
            type="text"
            placeholder="введіть ім'я"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ marginLeft: 10 }}
          />
        </label>
        <ul>
          {employeesFind.map((employees, index) => (
            <li key={index} style={{ listStyle: "none" }}>
              {employees}
            </li>
          ))}
          {employeesFind.length === 0 && (
            <li style={{ listStyle: "none" }}>Нічого не знайдено</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default FindWorker;
