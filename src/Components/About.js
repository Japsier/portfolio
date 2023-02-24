import "../Styles/About.css"
const About = () => {
    
    return(
    <main>
        <h2>About me</h2>
        <div className="description">
            <h3>Hello there! I'm japsir!</h3>
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
                There are <span className="beer">*very few things*</span> that excite me more than programming & learning about biology.
                My current goals are to keep improving my current coding skills, and to start reading more books. 
            </p>
        </div>
    </main>
    )
}
export default About