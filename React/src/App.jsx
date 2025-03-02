import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';

const App = () => {
  return (
    <Router>
      <MainContent />
    </Router>
  );
};

// Separate component to manage layout (Navbar visibility)
const MainContent = () => {
  const aboutRef = useRef(null);
  const location = useLocation(); // Get current route

  // Function to scroll to the About section
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Hide Navbar only on the login page */}
      {location.pathname !== "/login" && <Navbar scrollToSection={scrollToSection} aboutRef={aboutRef} />}
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About ref={aboutRef} />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
