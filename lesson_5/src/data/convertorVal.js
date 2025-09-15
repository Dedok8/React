// Задача. Конвертер з синхронізацією. При зміні валюти робиться запит для отримання поточного курсу обраної валюти
// Приклад запиту:
//bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&date=20220329&json
export const convectorList = [
  {
    code: "USD",
    name: "Долар США",
  },
  {
    code: "EUR",
    name: "Євро",
  },
  {
    code: "GBP",
    name: "Фунт стерлінгів",
  },
  {
    code: "PLN",
    name: "Злотий",
  },
];
