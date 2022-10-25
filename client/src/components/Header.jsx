import { Link } from 'react-router-dom'

const NAV = () => {
  return (
      <nav className="navBar">
        <h3>Journey Words</h3>
        <div>
          <Link to="/">Home</Link>
          <Link to="/viewlists">View All Lists</Link>
          <Link to="/createlists">Add List</Link>
        </div>
      </nav>
  )
}

export default Nav