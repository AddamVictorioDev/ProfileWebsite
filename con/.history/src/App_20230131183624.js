import logo from './logo.svg';
import './App.css';
import HomePage from './home';
import Addam from './addam';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Projects from './projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>

      <Route exact path="/" element={<Addam />}  />
      <Route path="projects" element={<Projects />} />

      </Routes>


  </BrowserRouter>
  );
}

export default App;
