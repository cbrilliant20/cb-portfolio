import "./About.css"
import thinking from "../../Assets/thinking.png"
import solve from "../../Assets/solve.png"
import communicate from "../../Assets/communicate.png"
import coach from "../../Assets/coach.png"
import headshot from "../../Assets/headshot.jpg"

const About = () => {
  return (
    <div id="about-container">
      <h2 id="about">About</h2>

      <div className="text-container">
        <img src={headshot} alt="" className="headshot" />

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
            In my free time you can find me traveling, spending time outdoors,
            playing sports, and walking my Weimaraner, Billy
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
    </div>
  )
}

export default About
