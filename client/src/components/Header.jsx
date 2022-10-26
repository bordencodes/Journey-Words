import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <nav className="navBar">
        <div>
          <Link to="/">Home</Link>
          <Link to="/phrases">Lists</Link>
          <Link to="">Add</Link>
        </div>
      </nav>
  )
}

export default Header