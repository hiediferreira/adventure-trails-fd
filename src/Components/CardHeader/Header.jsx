import "./header.css"

function Header(){
    return(
        <div className="container">
            <nav>
                Adventure Trails FD
                <div>
                    <a href="#">Explorar Trilhas</a>
                    <a href="#">Cadastrar Trilhas</a>
                </div>
            </nav>

            <div className="header"></div>
        </div>
    )
}
export default Header