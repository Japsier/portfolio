import '../Styles/App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Projects from './Projects';
import Footer from './Footer';
import Main from "./Main"
import About from './About';
import Contact from './Contact';
import Menu from "./Menu"
import React, { useState } from 'react';

function App() {
  const [isLightMode, setIsLightMode] = useState(true)
  const changeLightMode = (isLight) => {
    setIsLightMode(isLight)
  }

  const [activePage, setActivePage] = useState("home")
  const changeActivePage = (page) => {
    setActivePage(page)
  }
  const [showMenu, setShowMenu] = useState(false)
  const changeShowMenu = () => {
    if (showMenu) {
      setShowMenu(false)
    } else {
      setShowMenu(true)
    }
  }
  
  return (
    <HashRouter>
      <div className={isLightMode ? "App" : "App darkMode"}>
        <Header 
        activePage={activePage} changeActivePage={changeActivePage} 
        isLightMode={isLightMode} changeLightMode={changeLightMode}
        showMenu={showMenu} changeShowMenu={changeShowMenu}
        />
        {showMenu
        ? <Menu changeShowMenu={changeShowMenu} />
        : <Routes>
            <Route path="/" element={ <Main changeActivePage={changeActivePage} />} />
            <Route path="/about" element={<About changeActivePage={changeActivePage} />} />
            <Route path="/projects" element={ <Projects />} />
            <Route path="/contact" element={ <Contact />} />
          </Routes> }
        {showMenu
        ? null
        : <Footer /> }
      </div>

    </HashRouter>
  );
}

export default App;
