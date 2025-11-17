import { useState } from 'react'
import { useLoginMutation } from '@/shared/api/authApi'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '@/shared/model/authSlice'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [login, { isLoading, error }] = useLoginMutation()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await login({ email, password }).unwrap()

      if (result.user) {
        dispatch(loginSuccess(result))
      }
      navigate('/')
    } catch (err) {
      console.error('Login failed:', err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Увійти</h1>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={isLoading}>
        Увійти
      </button>
      {error && <p style={{ color: 'red' }}>Невірний логін або пароль</p>}
    </form>
  )
}
