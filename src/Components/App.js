import '../Styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Projects from './Projects';
import Footer from './Footer';
import Main from "./Main"
import About from './About';
import Contact from './Contact';
import React, { useState, useEffect } from 'react';

function App() {
  const [lightMode, setLightMode] = useState(true)
  const [activePage, setActivePage] = useState("home")
  const changeActivePage = (page) => {
    setActivePage(page)
    console.log(activePage)
  }
  
  return (
    <BrowserRouter>
      <div className='App'>
        <Header activePage={activePage} changeActivePage={changeActivePage} />
        <Routes>
          <Route path="/" element={ <Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={ <Projects />} />
          <Route path="/contact" element={ <Contact />} />
        </Routes>
        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;
