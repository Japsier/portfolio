import { Link } from "react-router-dom"
import "../Styles/Menu.css"
const Menu = (props) => {

    return(
    <ul className="menuPage">
        <Link to="/"><li onClick={() => props.changeShowMenu()}>Home</li></Link>
        <Link to="/about"><li onClick={() => props.changeShowMenu()}>About</li></Link>
        <Link to="/projects"><li onClick={() => props.changeShowMenu()}>Projects</li></Link>
        {/*<Link to="/contact"><li onClick={() => props.changeShowMenu()}>Contact</li></Link>*/}
    </ul>
    )
}
export default Menu