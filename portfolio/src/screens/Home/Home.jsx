import "./Home.css"

const Home = () => {
  return (
    <div id="home-container">
      <h1 className="home-h1">
        Hello, I'm <span>Cameron Brilliant</span>.
      </h1>
      <h2 className="home-h2">Full-Stack Web Developer</h2>

      <a href="#about-container">
        <button className="welcome-btn btn">Welcome</button>
      </a>
    </div>
  )
}

export default Home
