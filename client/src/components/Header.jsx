import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <nav className="navBar">
        <div>
          <h1>Journey Words</h1>
          <Link to="/" className="navLinks">Home </Link>
          <Link to="/phrases" className="navLinks">List </Link>
        </div>
      </nav>
  )
}

export default Header