import "./About.css"
import thinking from "../../Assets/thinking.png"
import solve from "../../Assets/solve.png"
import communicate from "../../Assets/communicate.png"
import coach from "../../Assets/coach.png"

const About = () => {
  return (
    <div id="about-container">
      <h2 id="about">About</h2>
      <div className="skills-container">
        <div className="skill">
          <img src={communicate} alt="communication" />
          <p>COMMUNICATION</p>
        </div>

        <div className="skill">
          <img src={coach} alt="coachable" />
          <p>COACHABLE</p>
        </div>

        <div className="skill">
          <img src={solve} alt="problem-solving" />
          <p>PROBLEM-SOLVING</p>
        </div>

        <div className="skill">
          <img src={thinking} alt="natural curiosity" />
          <p>NATURAL CURIOSITY</p>
        </div>
      </div>

      <div className="text-container">
        <div className="brand">
          <h4>Brand Statement</h4>
          <br />
          <p>
            I am a highly motivated, self-directed and coachable software
            developer with a unique perspective on the challenges and
            opportunities organizations face in the digital world. Through my
            experience in enterprise IT, Security, and Cloud Services, I have
            proven to be a strong teammate and leader with an aptitude for
            understanding and solving problems.
          </p>
        </div>
        <div className="tool">
          <h4>Tools and Technologies</h4>
          <br />
          <p>
            Languages - HTML, CSS, JavaScript, Ruby <br />
            Frameworks - React, Express, Rails
            <br />
            Database - MongoDB, SQL, PostgreSQL, Mongoose
            <br />
            Tools - GitHub, CLI, VSCode
          </p>
          <a
            href="https://drive.google.com/file/d/1xOJqFdfXbq4ewtzKXJVsqbxWqiIay2Vk/view?usp=sharing"
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
