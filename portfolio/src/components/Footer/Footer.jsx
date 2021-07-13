import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faGithubSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons"
import { faCopyright } from "@fortawesome/free-regular-svg-icons"

function Footer() {
  return (
    <footer>
      <div className="socials">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/cameron-brilliant/"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
        </a>

        <a
          target="_blank"
          href="https://github.com/cbrilliant20"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithubSquare} className="footer-icon" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/cbrilliant20/"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagramSquare} className="footer-icon" />
        </a>
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
