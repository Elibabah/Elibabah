import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Building Elibaba's portfolio
        </p>
        <a
          className="App-link"
          href="https://github.com/Elibabah"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my GitHub instead
        </a>
      </header>
    </div>
  );
}

export default App;
