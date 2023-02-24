import "../Styles/Header.css"
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import moon from "../Assets/moon.png"

const Header = (props) => {
    const activePage = props.activePage
    const changeActivePage = props.changeActivePage




    return(
        <header>
            <Link to="/"><h1 onClick={() => changeActivePage("home")} className="name">Japsir</h1></Link>
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
            <button className="lightSwitch"><img src={moon} alt="moon" /></button>
        </header>
    )
}
export default Header