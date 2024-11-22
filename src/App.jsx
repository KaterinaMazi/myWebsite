import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import AboutMe from './AboutMe';
import TechnicalStack from './TechnicalStack';
import Projects from './Projects';
import Skills from './Skills';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app-container-app"> {/* Ανανεωμένο με την κατάληξη "-app" */}
        <video className="video-background-app" autoPlay loop muted> {/* Ανανεωμένο με την κατάληξη "-app" */}
          <source src="/grey_plate.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Menu /> 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/technicalStack" element={<TechnicalStack />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
