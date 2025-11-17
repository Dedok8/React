const express = require('express')
const cors = require('cors')
const session = require('express-session')
const fs = require('fs').promises
const path = require('path')
const bcrypt = require('bcrypt')

const app = express()

// Middleware
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
)

app.use(express.json())

// Session configuration
app.use(
  session({
    secret: 'your-secret-key-change-in-production',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // set to true in production with HTTPS
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
)

// Data file paths
const USERS_FILE = path.join(__dirname, 'data', 'users.json')
const SESSIONS_FILE = path.join(__dirname, 'data', 'sessions.json')

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await fs.mkdir(path.join(__dirname, 'data'), { recursive: true })
  } catch (error) {
    console.log('Data directory already exists or error creating it')
  }
}

// Load data from JSON files
async function loadUsers() {
  try {
    const data = await fs.readFile(USERS_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    // If file doesn't exist, create with default users
    const defaultUsers = [
      {
        id: 1,
        username: 'admin',
        password: await bcrypt.hash('admin123', 10),
        role: 'admin',
        name: 'Адміністратор',
      },
      {
        id: 2,
        username: 'manager',
        password: await bcrypt.hash('manager123', 10),
        role: 'manager',
        name: 'Менеджер',
      },
      {
        id: 3,
        username: 'client',
        password: await bcrypt.hash('client123', 10),
        role: 'client',
        name: 'Клієнт',
      },
    ]
    await saveUsers(defaultUsers)
    return defaultUsers
  }
}

async function saveUsers(users) {
  await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2))
}

async function loadSessions() {
  try {
    const data = await fs.readFile(SESSIONS_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    return {}
  }
}

async function saveSessions(sessions) {
  await fs.writeFile(SESSIONS_FILE, JSON.stringify(sessions, null, 2))
}

// Authentication middleware
function requireAuth(req, res, next) {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Необхідна автентифікація' })
  }
  next()
}

function requireRole(roles) {
  return async (req, res, next) => {
    if (!req.session.userId) {
      return res.status(401).json({ error: 'Необхідна автентифікація' })
    }
    const users = await loadUsers()
    const user = users.find((u) => u.id === req.session.userId)

    if (!user || !roles.includes(user.role)) {
      return res.status(403).json({ error: 'Недостатньо прав доступу' })
    }
    req.user = user
    next()
  }
}

// Routes

// Login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body
    const users = await loadUsers()

    const user = users.find((u) => u.username === username)
    if (!user) {
      return res.status(401).json({ error: 'Невірні дані для входу' })
    }

    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Невірні дані для входу' })
    }

    // Create session
    req.session.userId = user.id
    req.session.userRole = user.role

    // Save session to file
    const sessions = await loadSessions()
    sessions[req.session.id] = {
      userId: user.id,
      userRole: user.role,
      createdAt: new Date().toISOString(),
    }
    await saveSessions(sessions)

    res.json({
      user: {
        id: user.id,
        username: user.username,
        name: user.name,
        role: user.role,
      },
    })
  } catch (error) {
    res.status(500).json({ error: 'Помилка сервера' })
  }
})

// Logout
app.post('/api/auth/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: 'Помилка при виході' })
    }
    res.clearCookie('connect.sid')
    res.json({ message: 'Успішний вихід' })
  })
})

// Get current user
app.get('/api/auth/me', async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({ error: 'Не автентифіковано' })
    }

    const users = await loadUsers()
    const user = users.find((u) => u.id === req.session.userId)

    if (!user) {
      return res.status(401).json({ error: 'Користувач не знайдений' })
    }

    res.json({
      user: {
        id: user.id,
        username: user.username,
        name: user.name,
        role: user.role,
      },
    })
  } catch (error) {
    res.status(500).json({ error: 'Помилка сервера' })
  }
})

// Protected routes examples

// Admin only
app.get('/api/admin/users', requireRole(['admin']), async (req, res) => {
  try {
    const users = await loadUsers()
    const safeUsers = users.map((u) => ({
      id: u.id,
      username: u.username,
      name: u.name,
      role: u.role,
    }))
    res.json({ users: safeUsers })
  } catch (error) {
    res.status(500).json({ error: 'Помилка сервера' })
  }
})

// Admin and Manager
app.get(
  '/api/management/reports',
  requireRole(['admin', 'manager']),
  (req, res) => {
    res.json({
      reports: [
        { id: 1, title: 'Звіт за місяць', type: 'monthly' },
        { id: 2, title: 'Звіт за квартал', type: 'quarterly' },
      ],
    })
  }
)

// Admin, Manager, Client
app.get(
  '/api/protected/data',
  requireRole(['admin', 'manager', 'client']),
  (req, res) => {
    res.json({
      data: [
        { id: 1, title: 'Конфіденційні дані 1' },
        { id: 2, title: 'Конфіденційні дані 2' },
      ],
    })
  }
)

// Public content with role-specific sections
app.get('/api/public/content', async (req, res) => {
  const content = {
    public: {
      title: 'Публічна інформація',
      description: 'Цю інформацію можуть бачити всі відвідувачі',
    },
  }

  // Add role-specific content if user is authenticated
  if (req.session.userId) {
    const users = await loadUsers()
    const user = users.find((u) => u.id === req.session.userId)

    if (user) {
      switch (user.role) {
        case 'admin':
          content.admin = {
            title: 'Адміністративна інформація',
            description: 'Спеціальна інформація для адміністраторів',
          }
          content.manager = {
            title: 'Управлінська інформація',
            description: 'Інформація для менеджерів',
          }
          content.client = {
            title: 'Клієнтська інформація',
            description: 'Інформація для клієнтів',
          }
          break
        case 'manager':
          content.manager = {
            title: 'Управлінська інформація',
            description: 'Інформація для менеджерів',
          }
          content.client = {
            title: 'Клієнтська інформація',
            description: 'Інформація для клієнтів',
          }
          break
        case 'client':
          content.client = {
            title: 'Клієнтська інформація',
            description: 'Інформація для клієнтів',
          }
          break
      }
    }
  }

  res.json(content)
})

// Initialize and start server
async function startServer() {
  await ensureDataDir()
  await loadUsers() // This will create default users if file doesn't exist

  const PORT = process.env.PORT || 5000
  app.listen(PORT, () => {
    console.log(`Сервер запущено на порті ${PORT}`)
    console.log('Тестові користувачі:')
    console.log('admin/admin123 (адмін)')
    console.log('manager/manager123 (менеджер)')
    console.log('client/client123 (клієнт)')
  })
}

startServer()
