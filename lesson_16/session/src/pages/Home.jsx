import { useSelector } from 'react-redux'

const HomePage = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth)

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Головна сторінка</h1>

      <div
        style={{
          backgroundColor: '#f8f9fa',
          padding: '1.5rem',
          borderRadius: '8px',
          marginBottom: '2rem',
          color: 'black',
        }}
      >
        <h2>Ласкаво просимо до системи!</h2>
        <p>
          session-based httpOnly cookies, Node.js + Express на бекенді та React
          + RTK Query на фронтенді.
        </p>
      </div>

      {isAuthenticated ? (
        <div
          style={{
            backgroundColor: '#d4edda',
            color: 'black',
            padding: '1rem',
            borderRadius: '4px',
            border: '1px solid #c3e6cb',
          }}
        >
          <h3>Ви успішно увійшли в систему!</h3>
          <p>
            <strong>Ім'я:</strong> {user.name}
          </p>
          <p>
            <strong>Роль:</strong> {user.role}
          </p>
          <p>
            <strong>Логін:</strong> {user.username}
          </p>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: '#fff3cd',

            padding: '1rem',
            borderRadius: '4px',
            border: '1px solid #ffeeba',
            color: 'black',
          }}
        >
          <h3>Ви не авторизовані</h3>
          <p>
            Будь ласка, увійдіть у систему, щоб отримати доступ до захищених
            сторінок.
          </p>
        </div>
      )}
    </div>
  )
}

export default HomePage
