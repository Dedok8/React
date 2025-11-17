import { useGetUsersQuery } from '@/shared/api/usersApi'

export default function AdminPage() {
  const { data: users, isLoading, error } = useGetUsersQuery()

  if (isLoading) return <div>Завантаження...</div>
  if (error) return <div>Помилка доступу або серверу</div>

  return (
    <div>
      <h1>Сторінка Адміна</h1>
      <ul>
        {users &&
          users.map((u) => (
            <li key={u.id || u._id || u.email}>
              {u.email} ({u.role})
            </li>
          ))}
      </ul>
    </div>
  )
}
