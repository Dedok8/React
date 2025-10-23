import { routes } from '@/router'
import { NavLink } from 'react-router'

function MainMenu() {
  return (
    <nav className="flex list-none gap-6  font-medium">
      {routes[0].children.map((r, index) => (
        <li key={index}>
          <NavLink
            to={r.path ?? ''}
            className={({ isActive }) => (isActive ? 'underline' : '')}
          >
            {r.handler.title}
          </NavLink>
        </li>
      ))}
    </nav>
  )
}

export default MainMenu
