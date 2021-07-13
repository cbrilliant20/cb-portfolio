import "./Nav.css"
// import { Link } from "react-router-dom"
import { HashLink as Link } from "react-router-hash-link"
import Contact from "../../screens/Contact/Contact"

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#home-container">HOME</a>
        </li>
        <li>
          <a href="#about-container">ABOUT</a>
        </li>
        <li>
          <a href="#portfolio-container">PORTFOLIO</a>
        </li>
        <li>
          <a href="#contact-container">CONTACT</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
