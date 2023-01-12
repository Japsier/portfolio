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
            <div className="whiteBG"></div>
            <div className="aboutText"> 
                <img className="backupPicture" src={profile} alt="" />        
                <h2>About me</h2>
                <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. 
                    Maecenas egestas posuere risus, 
                    lobortis volutpat dolor pharetra nec. 
                    Vivamus libero erat, 
                    facilisis eget dignissim sit amet, 
                    aliquet sit amet dolor. 
                    Etiam convallis ultricies libero, 
                    quis congue tortor faucibus id. 
                    In blandit sit amet risus nec lacinia. 
                    Nunc a metus purus. 
                    Duis consequat non tortor ac ullamcorper. 
                    Vestibulum ut erat non justo varius varius. 
                    Pellentesque condimentum diam convallis tristique mollis. 
                    Sed odio arcu, aliquam nec libero ultricies, 
                    rhoncus commodo purus. 
                    Curabitur erat eros, iaculis eu ullamcorper in, 
                    iaculis vel ex. Aliquam eu arcu malesuada, accumsan dui et, 
                    elementum sem. Ut ipsum neque, ullamcorper dictum luctus vitae, 
                    sollicitudin eu velit. </p>
            </div>
        </header>
    )
}
export default Header