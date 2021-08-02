import "./Nav.css"
import Burger from "../Burger/Burger"

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
      {/* <Burger /> */}
    </nav>
  )
}

export default Nav
