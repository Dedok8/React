import { useEffect } from 'react'
import { useRefreshMutation } from '@/shared/api/authApi'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '@/shared/model/authSlice'

export function AuthInit() {
  const [refresh] = useRefreshMutation()
  const dispatch = useDispatch()

  useEffect(() => {
    const init = async () => {
      try {
        const res = await refresh().unwrap()
        if (res.user && res.accessToken) {
          dispatch(loginSuccess(res))
        }
      } catch {
        // Неавторизований, нічого не робимо
      }
    }
    init()
  }, [refresh, dispatch])

  return null
}
