import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/collections">Lists</Link>
      </nav>
    </header>
  )
}

export default Nav