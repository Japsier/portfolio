import "../Styles/Main.css"
import { Link } from "react-router-dom"

const Main = (props) => {

    return(
        <main className="home">
            <h2>Hello, I'm,</h2>
            <h3>Jasper</h3>
            <p>
                I am a full stack javascript developer from the Netherlands.
                I use ReactJS, ExpressJS & Mongoose to develop amazing and unique websites. 
                This is the place where idea's can become reality.
            </p>
            <Link to="/about"><button onClick={() => props.changeActivePage("about")}>More about me <span>→</span></button></Link>
        </main>
    )
}
export default Main