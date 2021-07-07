import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitterSquare,
  faLinkedin,
  faGithubSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons"
import { faCopyright } from "@fortawesome/free-solid-svg-icons"

function Footer() {
  return (
    <footer>
      <div className="socials">
        <FontAwesomeIcon icon={faTwitterSquare} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faGithubSquare} />
        <FontAwesomeIcon icon={faInstagramSquare} />
      </div>
      <div className="copyright">
        <p>
          Cameron Brilliant
          <FontAwesomeIcon icon={faCopyright} />
          2021
        </p>
      </div>
    </footer>
  )
}

export default Footer
