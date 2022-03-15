import './App.css';
import NavBar from "./components/NavBar"
import { NavBarBoot } from "./components/NavBarBootstrap"
import About from "./components/About"

function App() {
  return (
    <div className="App">
      <NavBarBoot/>
      <About/>
    </div>
  );
}

export default App;
