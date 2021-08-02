import { Link } from "react-router-dom"

function BurgerNav() {
  return (
    <div className="burger-nav">
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
    </div>
  )
}
export default BurgerNav
