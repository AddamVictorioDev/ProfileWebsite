import logo from './logo.svg';
import './App.css';
import { MediaQuery } from 'react-responsive';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MediaQuery query="(min-width: 768px)">
  <p>This content will only be rendered on screens that are at least 768 pixels wide</p>
</MediaQuery>
      </header>
    </div>
  );
}

export default App;
