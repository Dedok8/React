import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router'
import { useSelector } from 'react-redux'
import { useLoginMutation } from '../store/apiSlice'

const LoginPage = () => {
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const [login, { isLoading }] = useLoginMutation()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const navigate = useNavigate()
  const location = useLocation()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await login(form).unwrap()
      const redirectTo = location.state?.from?.pathname || '/'
      navigate(redirectTo)
    } catch (err) {
      setError(err?.data?.message || 'Помилка входу')
    }
  }

  if (isAuthenticated) {
    navigate('/')
    return null
  }

  return (
    <div
      style={{
        maxWidth: 400,
        margin: '2rem auto',
        padding: '2rem',
        background: '#f8f9fa',
        borderRadius: 8,
        color: 'black',
      }}
    >
      <h2>Вхід</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label>Логін</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: 8, marginTop: 4 }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Пароль</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: 8, marginTop: 4 }}
          />
        </div>
        {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
        <button
          type="submit"
          disabled={isLoading}
          style={{ width: '100%', padding: 10 }}
        >
          {isLoading ? 'Вхід...' : 'Увійти'}
        </button>
      </form>
    </div>
  )
}

export default LoginPage
