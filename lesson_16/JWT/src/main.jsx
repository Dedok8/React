import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { Provider } from 'react-redux'
import { router } from '@/app/router/router'
import { store } from './app/store/store'
import './index.css'
import { AuthInit } from '@/app/AuthInit'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AuthInit />
    <RouterProvider router={router} />
  </Provider>
)
