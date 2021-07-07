import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitterSquare,
  faLinkedin,
  faGithubSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons"
import { faCopyright } from "@fortawesome/free-regular-svg-icons"

function Footer() {
  return (
    <footer>
      <div className="socials">
        <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
        <FontAwesomeIcon icon={faGithubSquare} className="footer-icon" />
        <FontAwesomeIcon icon={faTwitterSquare} className="footer-icon" />
        <FontAwesomeIcon icon={faInstagramSquare} className="footer-icon" />
      </div>
      <div className="copyright">
        <p>Cameron Brilliant</p>
        <p>
          <FontAwesomeIcon icon={faCopyright} className="copyright-icon" />
          2021
        </p>
      </div>
    </footer>
  )
}

export default Footer
