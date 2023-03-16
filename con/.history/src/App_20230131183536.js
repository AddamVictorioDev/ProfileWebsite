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

      <Route path="/" element={<Addam />}  />

      </Routes>


  </BrowserRouter>
  );
}

export default App;
