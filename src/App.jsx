import './App.css';
import { Routes, Route } from "react-router-dom"
import { NavBarBoot } from "./components/NavBar/NavBarBootstrap"
import { Home } from './components/Home/Home';
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import { Contact } from "./components/Contact/Contact" 
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
    
      <header className="navBar">
        <NavBarBoot/>
      </header>
      
      <main className="main">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="projects" element={ <Projects/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
      </main>
    
      <footer className="footer">
        <Footer/>
      </footer>
    
    </div>
  )
}

export default App;