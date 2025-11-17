import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

const ProtectedRoute = ({ children, requiresAuth, allowedRoles }) => {
  const { user, isAuthenticated, loading } = useSelector((state) => state.auth)

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
        }}
      >
        Завантаження...
      </div>
    )
  }

  // Якщо маршрут вимагає автентифікації, але користувач не автентифікований
  if (requiresAuth && !isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  // Якщо користувач автентифікований, але не має потрібної ролі
  if (isAuthenticated && user && !allowedRoles.includes(user.role)) {
    return (
      <div
        style={{
          padding: '20px',
          textAlign: 'center',
          backgroundColor: '#f8f9fa',
          border: '1px solid #dee2e6',
          borderRadius: '5px',
          margin: '20px',
        }}
      >
        <h2>Доступ заборонено</h2>
        <p>У вас немає достатніх прав для перегляду цієї сторінки.</p>
        <p>
          Ваша роль: <strong>{user.role}</strong>
        </p>
        <p>
          Необхідні ролі: <strong>{allowedRoles.join(', ')}</strong>
        </p>
      </div>
    )
  }

  // Якщо маршрут для гостей, але користувач увійшов
  if (!requiresAuth && allowedRoles.includes('guest') && isAuthenticated) {
    if (window.location.pathname === '/login') {
      return <Navigate to="/" replace />
    }
  }

  return children
}

export default ProtectedRoute
