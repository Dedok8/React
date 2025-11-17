import { useRefreshMutation } from '@/shared/api/authApi'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '@/shared/model/authSlice'
import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [refresh] = useRefreshMutation()
  const dispatch = useDispatch()

  useEffect(() => {
    const init = async () => {
      try {
        const res = await refresh().unwrap()
        if (res.user) {
          setUser(res.user)
          if (res.accessToken) {
            dispatch(loginSuccess(res))
          }
        } else {
          setUser(null)
        }
      } catch {
        setUser(null)
      }
    }
    init()
  }, [refresh, dispatch])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
