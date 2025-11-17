// Тестові користувачі для системи авторизації
// Паролі у відкритому вигляді для тестування (у реальному проекті зберігати хеші!)

module.exports = [
  {
    id: 1,
    username: 'admin',
    password: 'admin123',
    role: 'admin',
    name: 'Адміністратор',
  },
  {
    id: 2,
    username: 'manager',
    password: 'manager123',
    role: 'manager',
    name: 'Менеджер',
  },
  {
    id: 3,
    username: 'client',
    password: 'client123',
    role: 'client',
    name: 'Клієнт',
  },
  {
    id: 4,
    username: 'user1',
    password: 'user123',
    role: 'client',
    name: 'Звичайний користувач',
  },
  {
    id: 5,
    username: 'supervisor',
    password: 'supervisor123',
    role: 'manager',
    name: 'Супервайзер',
  },
]
