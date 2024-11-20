import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./constants/ThemeContext";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import TechStack from './components/TechStack/TechStack';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Resume from './components/Resume/Resume';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      <Routes>
        <Route path="/resume" element={<Resume />} />
        
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HomePage />
              <TechStack />
              <Experience />
              <Projects />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
