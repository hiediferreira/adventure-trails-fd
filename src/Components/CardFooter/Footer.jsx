import styles from "./footer.module.css"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

function Footer(){
    return(
        <footer className={styles.footer}>
            <p>Adventure Trails FD</p>
            <div className="footer-icones">
                <a href="#"><FaGithub /></a>
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaInstagram /></a>
            </div>
        </footer>
    )
}

export default Footer