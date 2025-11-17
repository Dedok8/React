import { useDispatch } from 'react-redux'
import { useGetCurrentUserQuery } from '../store/apiSlice'
import { useEffect } from 'react'
import { setLoading } from '../store/authSlice'

export default function InitAuth({ children }) {
  const dispatch = useDispatch()
  const { isLoading } = useGetCurrentUserQuery()
  useEffect(() => {
    dispatch(setLoading(isLoading))
  }, [isLoading, dispatch])
  return children
}
