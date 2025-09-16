const countries = [
  "Україна",
  "США",
  "Канада",
  "Польща",
  "Німеччина",
  "Франція",
  "Італія",
  "Велика Британія",
  "Чехія",
];
const positions = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "QA Engineer",
  "Project Manager",
  "UI/UX Designer",
  "DevOps Engineer",
  "Business Analyst",
  "HR Manager",
  "Product Owner",
];

export const dataGrid = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  age: Math.floor(Math.random() + 20) + 30,
  countries: countries[Math.floor(Math.random() * countries.length)],
  positions: positions[Math.floor(Math.random() * positions.length)],
}));
