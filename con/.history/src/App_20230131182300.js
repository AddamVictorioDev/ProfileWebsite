import logo from './logo.svg';
import './App.css';
import HomePage from './home';
import Addam from './addam';
import Projects from './projects';

import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Route exact path="/" component={Addam} />
    <Route path="/projects" component={Projects} />
 
  </BrowserRouter>

   
  );
}

export default App;
