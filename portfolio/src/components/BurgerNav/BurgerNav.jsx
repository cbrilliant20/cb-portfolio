import { Link } from "react-router-dom"
import "./BurgerNav.css"
import Burger from "../Burger/Burger"
import { faWindowClose } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import App from "../../App"

function BurgerNav() {
  // const [showMenu, setShowMenu] = useState(true)

  // let nav
  // if (showMenu) {
  //   nav = <BurgerNav />
  // }

  // const style = {
  //   display: "none",
  // }
  const refreshPage = () => {
    // location.href = /#home-container
    window.location.reload(false)
  }

  // const handleClick = () => {
  //   refreshPage()
  //   <BurgerNav style={display:'none'} />
  // }

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

        <FontAwesomeIcon icon={faWindowClose} className="close-icon" onClick={refreshPage} />
      </ul>
      {/* {nav} */}
    </div>
  )
}

export default BurgerNav
