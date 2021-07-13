import "./Portfolio.css"

const Portfolio = () => {
  return (
    <div id="portfolio-container">
      <h2>Portfolio</h2>
      <div className="card-container">
        <a href="#" target="_blank" rel="noreferrer">
          <div className="card card1">
            <h5>Project 1</h5>
            <p>Built with X, Y, and Z</p>
          </div>
        </a>

        <a href="#" target="_blank" rel="noreferrer">
          <div className="card card2">
            <img
              src="../../Assets/Screen\ Shot\ 2021-07-13\ at\ 5.59.50\ PM.jpg"
              alt=""
            />
            <h5>Project 1</h5>
            <p>Built with X, Y, and Z</p>
          </div>
        </a>

        <a href="#" target="_blank" rel="noreferrer">
          <div className="card card3">
            <h5>Project 1</h5>
            <p>Built with X, Y, and Z</p>
          </div>
        </a>

        <a href="#" target="_blank" rel="noreferrer">
          <div className="card card4">
            <h5>Project 1</h5>
            <p>Built with X, Y, and Z</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Portfolio
