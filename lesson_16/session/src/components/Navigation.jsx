import { Link, useLocation } from 'react-router'
import { useSelector } from 'react-redux'
import { useLogoutMutation } from '../store/apiSlice'
import routes from '../routes/routes'

const Navigation = () => {
  const location = useLocation()
  const { user, isAuthenticated } = useSelector((state) => state.auth)
  const [logout] = useLogoutMutation()

  const handleLogout = async () => {
    try {
      await logout().unwrap()
    } catch (error) {
      console.error('Помилка при виході:', error)
    }
  }

  const getVisibleRoutes = () => {
    const userRole = user?.role || 'guest'

    return routes.filter((route) => {
      if (!route.showInMenu) return false

      // Перевіряємо чи дозволена роль для цього маршруту
      if (!route.allowedRoles.includes(userRole)) return false

      // Якщо маршрут вимагає автентифікації, але користувач не увійшов
      if (route.requiresAuth && !isAuthenticated) return false

      return true
    })
  }

  const visibleRoutes = getVisibleRoutes()

  return (
    <nav
      style={{
        backgroundColor: '#343a40',
        padding: '1rem',
        marginBottom: '2rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div style={{ display: 'flex', gap: '1rem' }}>
          {visibleRoutes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              style={{
                color: location.pathname === route.path ? '#ffc107' : '#fff',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                backgroundColor:
                  location.pathname === route.path
                    ? 'rgba(255, 193, 7, 0.1)'
                    : 'transparent',
                transition: 'all 0.2s',
              }}
            >
              {route.label}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {isAuthenticated ? (
            <>
              <span style={{ color: '#fff' }}>
                Привіт, {user.name} ({user.role})
              </span>
              <button
                onClick={handleLogout}
                style={{
                  backgroundColor: '#dc3545',
                  color: '#fff',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Вийти
              </button>
            </>
          ) : (
            <Link
              to="/login"
              style={{
                color: '#fff',
                textDecoration: 'none',
                backgroundColor: '#007bff',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
              }}
            >
              Увійти
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
