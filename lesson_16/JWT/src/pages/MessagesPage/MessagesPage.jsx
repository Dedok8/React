import { selectAuthUser } from '@/shared/model/authSlice'
import { useSelector } from 'react-redux'

const messages = [
  { text: 'Для адміністратора', roles: ['admin'] },
  { text: 'Для менеджера і адміністратора', roles: ['admin', 'manager'] },
  {
    text: 'Для авторизованих користувачів',
    roles: ['admin', 'manager', 'user'],
  },
  { text: 'Для всіх', roles: [] },
]

export default function MessagesPage() {
  const user = useSelector(selectAuthUser)
  const role = user?.role

  return (
    <div>
      <h2>Повідомлення</h2>
      <ul>
        {messages.map((m, i) => {
          if (m.roles.length === 0) return <li key={i}>{m.text}</li>
          if (!role) return null
          return m.roles.includes(role) ? <li key={i}>{m.text}</li> : null
        })}
      </ul>
    </div>
  )
}
