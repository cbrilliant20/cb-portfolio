import "./Home.css"

const Home = () => {
  return (
    <div id="home-container">
      <h1>
        Hello, I'm <span>Cameron Brilliant</span>.
      </h1>
      <h2>Full-Stack Web Developer</h2>
      <button className="welcome-btn btn">
        <a href="#about-container">Welcome</a>
      </button>
    </div>
  )
}

export default Home
