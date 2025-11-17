import { NavLink } from 'react-router'
import { appRoutes } from '@/app/router/routesConfig'
import { useSelector } from 'react-redux'

export const Menu = () => {
  const user = useSelector((state) => state.auth.user)
  return (
    <nav>
      {appRoutes
        .filter(
          (r) =>
            r.meta.isInMenu &&
            (!r.meta.requireAuth ||
              (user &&
                (!r.meta.roles.length || r.meta.roles.includes(user.role))))
        )
        .map((r) => (
          <NavLink key={r.path} to={r.path} style={{ marginRight: 12 }}>
            {r.meta.title}
          </NavLink>
        ))}
    </nav>
  )
}
