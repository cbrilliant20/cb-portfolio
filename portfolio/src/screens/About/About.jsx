import "./About.css"
import headshot from "../../Assets/headshot.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons"

const About = () => {
  return (
    <div id="about-container">
      <h2 id="about">About</h2>
      <div className="text-container">
        <div className="img-container">
          <img
            src={headshot}
            // src="https://i.guim.co.uk/img/media/0db83b3d123185a5fe279bd88217bc76ba9b93e8/0_458_4500_4808/master/4500.jpg?width=700&quality=85&auto=format&fit=max&s=ac357381e95ce7a0e6c37775a752b1be"
            alt=""
            className="headshot"
          />
        </div>
        <div className="tool">
          <h4>I am a full stack developer based in Boston, Massachusetts.</h4>
          <br />
          <p>
            I spent the first five years of my career working at various
            technology companies in the Infrastructure, Security and Cloud
            Services segments. Through this exposure to the cutting edge, I have
            grown a love for software development and creating things of my own.
          </p>
          <br />
          <p>
            Some of the things I've learned along the way:
            <ul>
              <li>Lanugages - HTML, CSS, JavaScript, Ruby</li>
              <li>Frameworks - React, Rails, Express, Mongoose</li>
              <li>
                Tools - Github, CLI, Netlify, MongoDB, Chrome Dev Tools, JWT
              </li>
            </ul>
          </p>
          <br />
          <p>
            In my free time you can find me traveling, watching Boston sports,
            and spending time outdoors with my Weimaraner, Billy
          </p>
          <br />
          <a
            href="https://drive.google.com/file/d/1zoiL5Yb4vIYhzyxiqpL-CjFKSxyzPcoS/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button>Resume</button>
          </a>
        </div>
      </div>

      <a href="#portfolio-container">
        <FontAwesomeIcon icon={faAngleDoubleDown} className="about-down" />
      </a>
    </div>
  )
}

export default About
