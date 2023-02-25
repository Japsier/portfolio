import "../Styles/About.css"
import React, { useState } from 'react';
import beer from "../Assets/beer.png"

const About = () => {
    const [hover, setHover] = useState(false)

    
    return(
    <main>
        <h2>About Me</h2>
        <div className="description">
            <h3>Hello there! I'm Jasper.</h3>
            <p>
                I am a full stack webdeveloper from the Netherlands.
                I am currently a student at a Dutch university studying Biology.
                During my last years in high-school I became very interested in technology, 
                and especially how I can create my own applications and programs.
                The fact that I can build things that can be used by millions or even billions of people
                is something that I never thought would be possible. 
            </p>
            <p>
                What I love about web-development is that its a never-ending persuit,
                here is always something else to learn and explore.
                Its also a very empowering skill, the possibile things to build are virtually infinite.
            </p>
            <p>
                Besides coding I'm also very fascinated by science, especially biology.
                There are
                {hover
                ? <span onMouseLeave={() => setHover(false)} className="beer">
                    <img src={beer} alt="beer emoji"  className="beerIcon" />
                    <img src={beer} alt="beer emoji"  className="beerIcon" />
                    <img src={beer} alt="beer emoji"  className="beerIcon" />
                  </span>
                : <span onMouseEnter={() => setHover(true)}  className="beer"><span  className="beerText">  *very few things* </span></span> }        
                that excite me more than programming & learning about biology.
                My current goals are to keep improving my current coding skills, and to start reading more books. 
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
                <li>Render</li>
                <li>Vercel</li>
            </ul>
        </div>
    </main>
    )
}
export default About