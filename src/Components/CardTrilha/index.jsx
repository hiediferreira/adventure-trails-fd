import * as PropTypes from "prop-types"
import "./style.css"

function CardTrilha({dadosTrilha}){

    return(
        <div className="card-container">

            <img className="card-imagem" width={"200px"} src={dadosTrilha.urlImagem} alt="imagem-trilha" />

            <div className="card-container-dados">
                <p className="card-titulo">{dadosTrilha.nomeTrilha} - {dadosTrilha.cidade}/{dadosTrilha.estado}</p>
                <p className="card-nome">Por: {dadosTrilha.nomeUsuario}</p>
                <p className="card-duracao">Duração: {dadosTrilha.duracao} min</p>
                <p className="card-trajeto">Trajeto: {dadosTrilha.trajeto} km</p>
                <div className="card-dif">
                    <p>{dadosTrilha.dificuldade}</p>
                </div>
                <a href="#" className="link-aval">Avaliações</a>
            </div>

        </div>
    )
}

CardTrilha.propTypes = {
    dadosTrilha: PropTypes.exact({
        nomeTrilha: PropTypes.string.isRequired,
        cidade: PropTypes.string,
        estado: PropTypes.string,
        duracao: PropTypes.number,
        trajeto: PropTypes.number,
        dificuldade: PropTypes.string,
        tipo: PropTypes.oneOf(['Caminhada', 'Ciclismo']),
        nomeUsuario: PropTypes.string,
        urlImagem: PropTypes.string
    })
}

export default CardTrilha