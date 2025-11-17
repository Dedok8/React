import express from 'express'
import { readJSON, writeJSON } from '../utils/fileDb.js'
import { requireAuth, requireRole } from '../middleware/auth.js'

const router = express.Router()
const file = './data/users.json'

router.get('/', requireAuth, requireRole('admin'), async (req, res) => {
  const users = await readJSON(file)
  res.json(users)
})

router.get('/:id', requireAuth, async (req, res) => {
  const users = await readJSON(file)
  const user = users.find((u) => u.id === req.params.id)
  if (!user) return res.sendStatus(404)
  res.json(user)
})

export default router
