export const authCheckLoader =
  ({ appRoutes, refreshMutex, store, authApi, redirect }) =>
  async ({ request }) => {
    console.log('0000')

    const url = new URL(request.url)
    const pathname = url.pathname.replace(/^\//, '')
    const route = appRoutes.find((r) => r.path === pathname)

    // Базова структура даних, що повертається
    const loaderData = {
      user: null,
      isAuthenticated: false,
    }

    // Перевірка прав доступу до сторінки
    if (route?.meta?.requireAuth) {
      console.log('1111')

      // Перевіряємо, чи не виконується вже оновлення токену
      if (refreshMutex.isLocked()) {
        await refreshMutex.waitForUnlock()
      }

      // Отримуємо поточний стан авторизації
      const state = store.getState()
      console.log('state.auth')
      console.log(state.auth)

      const { accessToken, lastRefresh, tokenExpiry } = state.auth || {}

      // Перевіряємо, чи потрібно оновлювати токен
      const shouldRefresh =
        !accessToken ||
        (lastRefresh && Date.now() - lastRefresh > 5 * 60 * 1000) || // 5 хв
        (tokenExpiry && tokenExpiry < Date.now() + 60 * 1000) // За 1 хв до закінчення

      let user = state?.auth?.user

      if (shouldRefresh) {
        console.log('2222')

        const release = await refreshMutex.acquire()
        try {
          const res = await store.dispatch(authApi.endpoints.refresh.initiate())
          user = res?.data?.user

          if (!user) {
            throw redirect('/login')
          }
        } catch {
          throw redirect('/login')
        } finally {
          release()
        }
      }

      // Оновлюємо дані для повернення
      loaderData.user = user
      loaderData.isAuthenticated = true

      // Перевірка ролей
      if (
        route.meta.roles &&
        route.meta.roles.length > 0 &&
        (!user?.role || !route.meta.roles.includes(user.role))
      ) {
        throw redirect('/forbidden') // Сторінка 403 замість логіну
      }
    }

    return loaderData
  }
