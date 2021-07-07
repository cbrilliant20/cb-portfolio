import "./Nav.css"
import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav>
      <Link>Home</Link>
      <Link>About</Link>
      <Link>Portfolio</Link>
      <Link>Contact</Link>
    </nav>
  )
}

export default Nav
