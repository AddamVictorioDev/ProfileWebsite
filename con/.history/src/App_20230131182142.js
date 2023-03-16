import logo from './logo.svg';
import './App.css';
import HomePage from './home';
import Addam from './addam';
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Route path="/" component={HomePage} />
    <Route path="/projects" component={Projects} />
 
  </BrowserRouter>

   
  );
}

export default App;
