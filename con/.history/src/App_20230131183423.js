import logo from './logo.svg';
import './App.css';
import HomePage from './home';
import Addam from './addam';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>

      <Route exact path="/" component={Addam} />

      </Routes>


  </BrowserRouter>
  );
}

export default App;
