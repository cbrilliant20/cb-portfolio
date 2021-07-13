import "./App.css"
import Footer from "./components/Footer/Footer"
import Nav from "./components/Nav/Nav"
import Home from "./screens/Home/Home"
import About from "./screens/About/About"
import Contact from "./screens/Contact/Contact"
import Portfolio from "./screens/Portfolio/Portfolio"

function App() {
  return (
    <div className="App">
      <Home />

      <Nav />

      <About />

      <Portfolio />

      <Contact />

      <Footer />
    </div>
  )
}

export default App
