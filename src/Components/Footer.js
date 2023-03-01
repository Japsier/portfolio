import "../Styles/Footer.css"
import footerImg from "../Assets/footerImg.jpg"
import github from "../Assets/github-mark.png"

const Footer = () => {

    return(
        <footer>
            <ul className="contactLinks">
                <li className="github"><a href="https://github.com/Japsier" target="_blank" rel="noreferrer"><img src={github} alt="github logo" /></a></li>
                <li className="email" ><a href = "mailto:japsircode@gmail.com" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/128/2099/2099199.png" alt="email logo" /></a></li>
            </ul>
            
        </footer>
    )
}

export default Footer