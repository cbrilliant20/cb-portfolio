import "./About.css"

const About = () => {
  return (
    <div className="about-container">
      <h2>About</h2>
      <div className="skills-container">
        <div className="skill">
          <img
            src="https://image.flaticon.com/icons/png/512/901/901163.png"
            alt="communication"
          />
          <p>COMMUNICATION</p>
        </div>

        <div className="skill">
          <img
            src="https://image.flaticon.com/icons/png/512/3938/3938382.png"
            alt="coachable"
          />
          <p>COACHABLE</p>
        </div>

        <div className="skill">
          <img
            src="https://image.flaticon.com/icons/png/512/3050/3050384.png"
            alt="problem-solving"
          />
          <p>PROBLEM-SOLVING</p>
        </div>

        <div className="skill">
          <img
            src="https://image.flaticon.com/icons/png/512/4752/4752591.png"
            alt="natural curiosity"
          />
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
          <button>
            <a href="#">Resume</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
