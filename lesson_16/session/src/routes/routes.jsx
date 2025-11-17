import HomePage from '../pages/Home'
import LoginPage from '../pages/Login'
import AdminPage from '../pages/AdminPage'
import ManagementPage from '../pages/ManagementPage'
import ProtectedPage from '../pages/ProtectedPage'
import PublicPage from '../pages/PublicPage'
import NotFoundPage from '../pages/NotFoundPage'

export const routes = [
  {
    path: '/',
    element: <HomePage />,
    label: 'Головна',
    showInMenu: true,
    requiresAuth: false,
    allowedRoles: ['guest', 'client', 'manager', 'admin'],
  },
  {
    path: '/login',
    element: <LoginPage />,
    label: 'Вхід',
    showInMenu: false,
    requiresAuth: false,
    allowedRoles: ['guest'],
  },
  {
    path: '/admin',
    element: <AdminPage />,
    label: 'Адміністрування',
    showInMenu: true,
    requiresAuth: true,
    allowedRoles: ['admin'],
  },
  {
    path: '/management',
    element: <ManagementPage />,
    label: 'Управління',
    showInMenu: true,
    requiresAuth: true,
    allowedRoles: ['admin', 'manager'],
  },
  {
    path: '/protected',
    element: <ProtectedPage />,
    label: 'Особистий кабінет',
    showInMenu: true,
    requiresAuth: true,
    allowedRoles: ['admin', 'manager', 'client'],
  },
  {
    path: '/public',
    element: <PublicPage />,
    label: 'Публічна сторінка',
    showInMenu: true,
    requiresAuth: false,
    allowedRoles: ['guest', 'client', 'manager', 'admin'],
  },
  {
    path: '*',
    element: <NotFoundPage />,
    label: '404',
    showInMenu: false,
    requiresAuth: false,
    allowedRoles: ['guest', 'client', 'manager', 'admin'],
  },
]

export default routes
