import { Link, useNavigate } from 'react-router'
import { useLogoutMutation } from '@/shared/api/authApi'

import { useSelector, useDispatch } from 'react-redux'
import { logout as logoutStore } from '@/shared/model/authSlice'

export function UserInfo() {
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()
  const [logout] = useLogoutMutation()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    dispatch(logoutStore())
    navigate('/login')
  }

  return (
    <div style={{ marginLeft: 'auto' }}>
      {user ? (
        <>
          <span>
            Привіт, {user.email} ({user.role})
          </span>
          <button onClick={handleLogout} style={{ marginLeft: '10px' }}>
            Вийти
          </button>
        </>
      ) : (
        <Link to="/login">Увійти</Link>
      )}
    </div>
  )
}
