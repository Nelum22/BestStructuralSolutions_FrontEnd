import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Projects from './components/Projects';
import Project1 from './components/Project1'
import {Route , Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Project1" element={<Project1 />} />
     </Routes>
     
      
    </div>
  );
}


export default App;
