import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <nav>
        <div className="navItems">
          <div></div>
          <div className="mainTitle">Journey Words</div>
          <Link to="/" className="navLinks">Home </Link>
          <Link to="/phrases" className="navLinks">List </Link>
        </div>
      </nav>
  )
}

export default Header