import "../Styles/About.css"
import React, { useState, useEffect } from 'react';
import beer from "../Assets/beer.png"
import { Link } from "react-router-dom";

const About = (props) => {
    const [hover, setHover] = useState(false)

    useEffect(() => {
        document.title = "About - Jasper"
        window.scrollTo(0, 0);
    }, [])

    
    return(
    <main>
        <h2>About Me</h2>
        <div className="description">
            <h3>Hello there! I'm Jasper.</h3>
            <p>
                I am a full stack webdeveloper from the Netherlands.
                I am currently a student at a Dutch university.
                Starting in my last years of high-school I became very interested in technology, 
                and especially how I can create my own applications and programs.
                The fact that I can build things that can be used by millions or even billions of people
                around the world is something that I never thought to be a possibility. 
            </p>
            <p>
                What I love about web-development is that its a never-ending persuit,
                there is always something new to learn and explore.
                Its also a very empowering skill, the possibile things to build are virtually infinite.
            </p>
            <p>
                But the best part about software development is helping others. 
                Helping a person, user or a bussiness to achieve their goals
                is just an incredible feeling. Want to learn more about me? Look at my skills and projects below.
            </p>
        </div>
        <div className="skills">
            <h4>My skills</h4>
            <h5>Front-End</h5>
            <ul className="frontend">
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind</li>
                <li>Sass</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>Styled Components</li>
            </ul>
            <h5>Back-End</h5>
            <ul className="backend">
                <li>Node.js</li>
                <li>ExpressJS</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
            </ul>
            <h5>Additional</h5>
            <ul className="additional">
                <li>Git</li>
                <li>Webpack</li>
                <li>Vercel</li>
                <li>Firebase</li>
                <li>Jest</li>
                <li>Render</li>
            </ul>
        </div>
        <Link to="/projects"><button onClick={() => props.changeActivePage("projects")}>See My Work<span>→</span></button></Link>
    </main>
    )
}
export default About