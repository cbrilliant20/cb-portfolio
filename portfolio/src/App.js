import "./App.css"
import Footer from "./components/Footer/Footer"
import Nav from "./components/Nav/Nav"
import Contact from "./screens/Contact/Contact"
import Home from "./screens/Home/Home"

function App() {
  return (
    <div className="App">
      <Home />
      <Nav />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
