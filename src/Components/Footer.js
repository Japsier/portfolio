import "../Styles/Footer.css"
import footerImg from "../Assets/footerImg.jpg"
import github from "../Assets/github-mark.png"

const Footer = () => {

    return(
        <footer>
            <ul className="contactLinks">
                <li className="github"><img src={github} alt="github logo" /></li>
                <li className="email" ><img src="https://cdn-icons-png.flaticon.com/128/2099/2099199.png" alt="github logo" /></li>
            </ul>
            
        </footer>
    )
}

export default Footer