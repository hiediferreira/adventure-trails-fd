import styles from "./footer.module.css"
import { Link } from "react-router-dom"
// import GitHubIcon from '@mui/icons-material/GitHub'
// import LinkedInIcon from '@mui/icons-material/LinkedIn'
// import InstagramIcon from '@mui/icons-material/Instagram';

import { GitHub, LinkedIn, Instagram} from "@mui/icons-material"

function Footer(){
    return(
        <footer className={styles.footer}>
            <Link className={styles.iconHome2} to="/">Adventure Trails FD</Link> 
            <div>
                <Link className={styles.footerIcons}>
                    <GitHub fontSize="large"/>
                </Link>
                <Link className={styles.footerIcons}>
                    <LinkedIn fontSize="large" />
                </Link>
                <Link className={styles.footerIcons}>
                    <Instagram fontSize="large" />
                </Link>
            </div>
        </footer>
    )
}

export default Footer
