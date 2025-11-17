import { createBrowserRouter } from 'react-router'
import { appRoutes } from './routesConfig'
import { MainLayout } from '@/widgets/MainLayout/MainLayout'
import { Mutex } from 'async-mutex'
import { authCheckLoader } from './authCheckLoader'

// Глобальний м'ютекс для запобігання конкурентним запитам оновлення
const refreshMutex = new Mutex()
const authLoader = authCheckLoader({
  refreshMutex,
})

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    loader: authLoader,
    children: appRoutes.map((route) => ({
      ...route,
      loader: () => authLoader(route),
    })),
  },
  {
    path: '/forbidden',
    element: <h1>403 — Доступ заборонено</h1>,
  },
  {
    path: '*',
    element: <h1>404 — Сторінку не знайдено</h1>,
  },
])
