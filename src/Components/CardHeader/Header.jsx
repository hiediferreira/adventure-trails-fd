import styles from "./header.module.css"
import { Link } from "react-router-dom"

function Header(){
    return(
        <header className={styles.header}>
            <Link className={styles.linkHome1} to="/">Adventure Trails FD</Link>                
            <nav>
                <Link  className={styles.linkHeader} to="/lista">Explorar Trilhas</Link>
                <Link className={styles.linkHeader} to="/cadastro">Cadastrar Trilhas</Link>
            </nav>
        </header>
    )
}
export default Header