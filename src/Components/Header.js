import "../Styles/Header.css"
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import moon from "../Assets/moon.png"
import sun from "../Assets/sun.png"

const Header = (props) => {
    const activePage = props.activePage
    const changeActivePage = props.changeActivePage

    const isLight = props.isLightMode
    const changeLightMode = props.changeLightMode




    return(
        <header>
            <Link to="/"><h1 onClick={() => changeActivePage("home")} className="name">Jasper</h1></Link>
            <nav>
                {activePage === "home"
                ? <Link to="/"><div onClick={() => changeActivePage("home")} className="active" >Home</div></Link>
                : <Link to="/"><div onClick={() => changeActivePage("home")} >Home</div></Link> }
                {activePage === "about"
                ? <Link to="/about"><div onClick={() => changeActivePage("about")} className="active" >About</div></Link>
                : <Link to="/about"><div onClick={() => changeActivePage("about")} >About</div></Link>}
                {activePage === "projects"
                ? <Link to="/projects"><div onClick={() => changeActivePage("projects")} className="active" >Projects</div></Link>
                : <Link to="/projects"><div onClick={() => changeActivePage("projects")} >Projects</div></Link>}
                {activePage === "contact"
                ? <Link to="/contact"><div onClick={() => changeActivePage("contact")} className="active" >Contact</div></Link>
                : <Link to="/contact"><div onClick={() => changeActivePage("contact")} >Contact</div></Link>}                      
            </nav>
            {isLight
            ? <button className="lightSwitch" onClick={() => changeLightMode(false)}><img src={moon} alt="moon" /></button>
            : <button className="lightSwitch" onClick={() => changeLightMode(true)}><img src={sun} alt="moon" /></button>}
            
        </header>
    )
}
export default Header