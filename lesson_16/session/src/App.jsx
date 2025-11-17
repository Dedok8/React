import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Navigation from './components/Navigation'
import ProtectedRoute from './components/ProtectedRoute'
import routes from './routes/routes'

function App() {
  return (
    <Router>
      <Navigation />
      <div style={{ minHeight: '80vh' }}>
        <Routes>
          {routes.map(({ path, element, requiresAuth, allowedRoles }) =>
            requiresAuth ? (
              <Route
                key={path}
                path={path}
                element={
                  <ProtectedRoute
                    requiresAuth={requiresAuth}
                    allowedRoles={allowedRoles}
                  >
                    {element}
                  </ProtectedRoute>
                }
              />
            ) : (
              <Route key={path} path={path} element={element} />
            )
          )}
        </Routes>
      </div>
    </Router>
  )
}

export default App
