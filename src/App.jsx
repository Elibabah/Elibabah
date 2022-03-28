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
    <div>
        <NavBarBoot/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/> 
        <Footer/>
    </div>
    
  )
}

export default App;