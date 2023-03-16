import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from './home';
import Addam from './addam';
import Projects from './projects';




function App() {
  return (
    <BrowserRouter>
    <Route exact path="/" component={Projects} />
    <Route path="/projects" component={Projects} />
 
  </BrowserRouter>

   
  );
}

export default App;
