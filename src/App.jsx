import './App.css';
import NavBar from "./components/NavBar"
import { NavBarBoot } from "./components/NavBarBootstrap"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import { Contact } from "./components/Contact" 
import About from "./components/About"

function App() {
  return (
    <main className='App'>

      <div className="navBar">
        <NavBarBoot/>
        <About/>
      </div>

      <div className="projects">
        <Projects/>
      </div>

      <div className="contact">
        <Contact/>
      </div>

      <div className="footer">
        <Footer/>
      </div>

    </main>
  );
}

export default App;
