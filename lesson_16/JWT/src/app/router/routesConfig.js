export const appRoutes = [
  {
    path: '',
    lazy: async () => ({
      Component: (await import('@/pages/HomePage/HomePage')).default,
    }),
    meta: {
      title: 'Головна',
      isInMenu: true,
      requireAuth: false,
      roles: [],
    },
  },
  {
    path: 'login',
    lazy: async () => ({
      Component: (await import('@/pages/LoginPage/LoginPage')).default,
    }),
    meta: {
      title: 'Login page',
      isInMenu: false,
      requireAuth: false,
      roles: [],
    },
  },
  {
    path: 'admin',
    lazy: async () => ({
      Component: (await import('@/pages/AdminPage/AdminPage')).default,
    }),
    meta: {
      title: 'Адмін',
      isInMenu: true,
      requireAuth: true,
      roles: ['admin'],
    },
  },
  {
    path: 'manager',
    lazy: async () => ({
      Component: (await import('@/pages/ManagerPage/ManagerPage')).default,
    }),
    meta: {
      title: 'Менеджер',
      isInMenu: true,
      requireAuth: true,
      roles: ['admin', 'manager'],
    },
  },
  {
    path: 'messages',
    lazy: async () => ({
      Component: (await import('@/pages/MessagesPage/MessagesPage')).default,
    }),
    meta: {
      title: 'Повідомлення',
      isInMenu: true,
      requireAuth: false,
      roles: [],
    },
  },
  {
    path: 'forbidden',
    lazy: async () => ({
      Component: (await import('@/pages/ForbiddenPage/ForbiddenPage')).default,
    }),
    meta: {
      isInMenu: false,
      requireAuth: false,
      roles: [],
    },
  },
]
