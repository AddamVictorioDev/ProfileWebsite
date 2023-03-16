import logo from './logo.svg';
import './App.css';
import Home from './home.js';
import HomePage from './home.js';
import { MediaQuery } from 'react-responsive';
function App() {
  return (
    <MediaQuery query="(max-width: 767px)">
  <p>This content will only be rendered on screens that are less than 767 pixels wide</p>
</MediaQuery>

  );
}

export default App;
