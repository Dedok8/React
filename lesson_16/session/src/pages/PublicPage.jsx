import { useSelector } from 'react-redux'

const PublicPage = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth)
  const role = isAuthenticated ? user.role : 'guest'

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Публічна сторінка</h2>
      <p>Ця сторінка доступна для всіх користувачів.</p>
      <div style={{ marginTop: '2rem' }}>
        <div
          style={{
            background: '#e9ecef',
            padding: '1rem',
            borderRadius: '4px',
            marginBottom: '1rem',
            color: 'black',
          }}
        >
          <strong>Повідомлення для всіх:</strong> Вітаємо у нашій системі!
        </div>
        {role === 'admin' && (
          <div
            style={{
              background: '#f8d7da',
              padding: '1rem',
              borderRadius: '4px',
              marginBottom: '1rem',
              color: 'black',
            }}
          >
            <strong>Адмін:</strong> Ви маєте повний доступ до системи.
          </div>
        )}
        {role === 'manager' && (
          <div
            style={{
              background: '#d1ecf1',
              padding: '1rem',
              borderRadius: '4px',
              marginBottom: '1rem',
              color: 'black',
            }}
          >
            <strong>Менеджер:</strong> Ви можете керувати даними користувачів.
          </div>
        )}
        {role === 'client' && (
          <div
            style={{
              background: '#fff3cd',
              padding: '1rem',
              borderRadius: '4px',
              marginBottom: '1rem',
              color: 'black',
            }}
          >
            <strong>Клієнт:</strong> Ви можете переглядати свої дані.
          </div>
        )}
      </div>
    </div>
  )
}

export default PublicPage
