import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <nav className="navBar">
        <h3>Journey Words</h3>
        <div>
          <Link to="/">Home</Link>
          <Link to="/collections">View Lists</Link>
        </div>
      </nav>
  )
}

export default Header