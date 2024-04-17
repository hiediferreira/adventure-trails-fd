import styles from "./header.module.css"
import { Link } from "react-router-dom"

function Header(){
    return(
        <header className={styles.header}>
            <Link to="/">Adventure Trails FD</Link>                
            <nav>
                <Link to="/lista">Explorar Trilhas</Link>
                <Link to="/cadastro">Cadastrar Trilhas</Link>
            </nav>
        </header>
    )
}
export default Header