import MainLayout from '@/layouts/MainLayout'
import About from '@/pages/About'
import CartPage from '@/pages/CartPage'
import Home from '@/pages/Home'
import ProductsPage from '@/pages/ProductsPage'
import { Component } from 'react'

import { createBrowserRouter } from 'react-router'

export const routes = [
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        handler: {
          title: 'Home',
        },
      },
      {
        path: 'products',
        Component: ProductsPage,
        handler: {
          title: 'Products',
        },
      },
      {
        path: 'cart',
        Component: CartPage,
        handler: {
          title: 'Cart',
        },
      },
      {
        path: 'about',
        Component: About,
        handler: {
          title: 'About',
        },
      },
    ],
  },
]

const router = createBrowserRouter(routes)

export default router
