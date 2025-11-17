import { Menu } from './Menu'
import { UserInfo } from './UserInfo'

export function Header() {
  return (
    <header
      style={{
        padding: '10px',
        borderBottom: '1px solid #ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Menu />
      <UserInfo />
    </header>
  )
}
