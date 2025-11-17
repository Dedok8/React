import { Link } from 'react-router'

export default function HomePage() {
  return (
    <div>
      <h1>Головна сторінка</h1>
      <Link to="/admin">Admin go</Link>
    </div>
  )
}
