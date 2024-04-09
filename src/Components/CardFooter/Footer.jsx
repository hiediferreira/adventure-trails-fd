import "./footer.css"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

function Footer(){
    return(
        <div className="container">
            <footer>
                <p>Adventure Trails FD</p>
                <div className="footer-icones">
                    <a href="#"><FaGithub /></a>
                    <a href="#"><FaLinkedin /></a>
                    <a href="#"><FaInstagram /></a>
                </div>
            </footer>
        </div>
    )
}

export default Footer