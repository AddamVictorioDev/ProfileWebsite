import logo from './logo.svg';
import './App.css';
import HomePage from './home';
import Addam from './addam';
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Projects from './projects';


function App() {
  return (
    <BrowserRouter>
    <Route exact path="/" component={HomePage} />
    <Route path="/projects" component={Projects} />
    
  </BrowserRouter>

   
  );
}

export default App;
