import "../Styles/Contact.css"
import { useEffect } from "react"

const Contact = () => {
    useEffect(() => {
        document.title = "Contact - Jasper"
    }, [])

    return(
        <div>
            <h2>Contact</h2>
        </div>
    )
}
export default Contact