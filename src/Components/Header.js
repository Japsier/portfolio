import "../Styles/Header.css"
import profile from "../Assets/profile.jpg"

const Header = () => {


    return(
        <header>
            <div className="profilePicture">
                <h1>Name lastname</h1>
                <div className="pictureContainer">
                    <img src={profile} alt="" />
                </div>
            </div>
            <div className="aboutText"> 
                <img className="backupPicture" src={profile} alt="" />        
                <h1 className="backupName">Name Lastname</h1>
                <h2>About me</h2>
                <p>Hello and welcome  to my website! 
                    This website is my personal platform that showcases my skills and passion for web development. 
                    As a student, I am dedicated to learning new things, 
                    like new technologies and programming languages, and use that knowledge to build cool projects. 
                    My website serves as a portfolio that showcases my work and my development journey. 
                    The website is a reflection of my love for coding and my ambition to create meaningful and impactful projects. 
                    The website also communicates that I am open to working with other ambitious people who share my passion for technology and development. 
                    With my website, I aim to connect with like-minded individuals and explore opportunities to collaborate and grow together.</p>
            </div>
        </header>
    )
}
export default Header