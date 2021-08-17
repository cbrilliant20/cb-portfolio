import "./Portfolio.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons"

const Portfolio = () => {
  return (
    <div id="portfolio-container">
      <h2>Portfolio</h2>
      <div className="card-container">
        <a
          href="https://compass-travel.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="card card1">
            <div className="card-top">
              <h4>COMPASS</h4>
              <p>
                COMPASS is a travel planning application where users can create,
                update and delete account specific trips and itineraries.
              </p>
            </div>
            <div className="card-bottom">
              <p>Built with HTML, CSS, React, Ruby, Rails and MongoDB</p>
            </div>
          </div>
        </a>

        <a
          href="https://thevinylexchange.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <div className="card card1">
            <div className="card-top">
              <h4>The Vinyl Exchange</h4>
              <p>
                The Vinyl Exchange is a social marketplace to buy and sell new
                and old records, offering full CRUD capability, user
                authentication, and a home grown API.
              </p>
            </div>
            <div className="card-bottom">
              <p>
                Built with HTML, CSS, Mongoose, Express, Node, React and MongoDB
              </p>
            </div>
          </div>
        </a>

        <a
          href="https://devhub20.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="card card1">
            <div className="card-top">
              <h4>devHub</h4>
              <p>
                devHub is a reasource to keep track and manage the many online
                resources a web developer relies upon. Users can view and access
                existing resources as well as add their own to the database.
              </p>
            </div>
            <div className="card-bottom">
              <p>Built with HTML, CSS, React and Airtable</p>
            </div>
          </div>
        </a>

        <a
          href="https://cbrilliant20.github.io/Weather-App/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="card card1">
            <div className="card-top">
              <h4>Weather App</h4>
              <p>
                The Weather App will take a city or zipcode from a user and
                return the current weather for that location. Built with the
                OpenWeather API, our users are confident they are recieving the
                most up to date weather information avaialable.
              </p>
            </div>
            <div className="card-bottom">
              <p>Built with HTML, CSS and JavaScript</p>
            </div>
          </div>
        </a>
      </div>
      <a href="#contact-container">
        <FontAwesomeIcon icon={faAngleDoubleDown} className="portfolio-down" />
      </a>
    </div>
  )
}

export default Portfolio
