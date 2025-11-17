import express from 'express'
import { readJSON, writeJSON } from '../utils/fileDb.js'
import { requireAuth } from '../middleware/auth.js'
import { v4 as uuid } from 'uuid'

const router = express.Router()
const file = './data/posts.json'

// router.get('/', async (req, res) => {
//   const posts = await readJSON(file)
//   res.json(posts)
// })

router.get('/', async (req, res) => {
  const { page = 1, limit = 10 } = req.query

  const posts = await readJSON(file)
  const pageNum = Math.max(1, parseInt(page, 10))
  const limitNum = Math.max(1, parseInt(limit, 10))

  const totalItems = posts.length
  const totalPages = Math.ceil(totalItems / limitNum)

  const startIndex = (pageNum - 1) * limitNum
  const endIndex = startIndex + limitNum

  const items = posts.slice(startIndex, endIndex)

  res.json({
    items,
    page: pageNum,
    limit: limitNum,
    totalItems,
    totalPages,
  })
})

router.post('/', requireAuth, async (req, res) => {
  const posts = await readJSON(file)
  const newPost = {
    id: uuid(),
    title: req.body.title,
    body: req.body.body,
    authorId: req.user.id,
  }
  posts.push(newPost)
  await writeJSON(file, posts)
  res.status(201).json(newPost)
})

router.put('/:id', requireAuth, async (req, res) => {
  const posts = await readJSON(file)
  const idx = posts.findIndex((p) => p.id === req.params.id)
  if (idx === -1 || posts[idx].authorId !== req.user.id)
    return res.sendStatus(403)
  posts[idx] = { ...posts[idx], ...req.body }
  await writeJSON(file, posts)
  res.json(posts[idx])
})

router.delete('/:id', requireAuth, async (req, res) => {
  const postId = req.params.id
  const user = req.user // Передбачається, що authMiddleware додає req.user

  const posts = await readJSON(file)
  const post = posts.find((p) => p.id === postId)

  if (!post) {
    return res.status(404).json({ message: 'Пост не знайдено' })
  }

  // Перевірка прав: адміністратор або власник поста
  if (user.role !== 'admin' && post.authorId !== user.id) {
    return res
      .status(403)
      .json({ message: 'Немає прав на видалення цього поста' })
  }

  // Видаляємо пост
  const updatedPosts = posts.filter((p) => p.id != postId)

  await writeJSON(file, updatedPosts)
  res.json({ message: 'Пост успішно видалено' })
})

export default router
