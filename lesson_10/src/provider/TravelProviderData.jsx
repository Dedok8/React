import { TravelDataContext } from "@/context/TravelDataContext";

const BUSES_DATA = [
  {
    id: 1,
    name: "Комфорт Експрес",
    route: "Київ - Львів",
    time: "08:00",
    price: 450,
    seats: 45,
    class: "Комфорт",
  },
  {
    id: 2,
    name: "Люкс Лайнер",
    route: "Київ - Одеса",
    time: "09:30",
    price: 550,
    seats: 35,
    class: "Люкс",
  },
  {
    id: 3,
    name: "Стандарт Плюс",
    route: "Київ - Харків",
    time: "10:00",
    price: 350,
    seats: 50,
    class: "Стандарт",
  },
  {
    id: 4,
    name: "Швидкий маршрут",
    route: "Київ - Дніпро",
    time: "11:15",
    price: 400,
    seats: 40,
    class: "Комфорт",
  },
  {
    id: 5,
    name: "Нічний експрес",
    route: "Київ - Львів",
    time: "22:00",
    price: 420,
    seats: 38,
    class: "Комфорт",
  },
  {
    id: 6,
    name: "Економ Тур",
    route: "Київ - Вінниця",
    time: "07:30",
    price: 280,
    seats: 55,
    class: "Економ",
  },
];

const HOTELS_DATA = [
  {
    id: 1,
    name: 'Готель "Престиж"',
    city: "Львів",
    stars: 5,
    price: 2500,
    features: "Wi-Fi, басейн, спа",
  },
  {
    id: 2,
    name: 'Готель "Комфорт"',
    city: "Одеса",
    stars: 4,
    price: 1800,
    features: "Wi-Fi, сніданок, паркінг",
  },
  {
    id: 3,
    name: 'Готель "Центральний"',
    city: "Харків",
    stars: 4,
    price: 1600,
    features: "Wi-Fi, ресторан, тренажерний зал",
  },
  {
    id: 4,
    name: 'Готель "Рів\'єра"',
    city: "Одеса",
    stars: 5,
    price: 3000,
    features: "Вид на море, спа, ресторан",
  },
  {
    id: 5,
    name: 'Готель "Київська Русь"',
    city: "Львів",
    stars: 3,
    price: 1200,
    features: "Wi-Fi, сніданок",
  },
  {
    id: 6,
    name: 'Готель "Дніпро Плаза"',
    city: "Дніпро",
    stars: 4,
    price: 1700,
    features: "Wi-Fi, паркінг, конференц-зал",
  },
];

function TravelProviderData({ children }) {
  const value = { buses: BUSES_DATA, hotels: HOTELS_DATA };
  return (
    <TravelDataContext.Provider value={value}>
      {children}
    </TravelDataContext.Provider>
  );
}

export default TravelProviderData;
