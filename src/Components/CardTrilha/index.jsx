import * as PropTypes from "prop-types"
import "./style.css"

function CardTrilha({dadosTrilha}){

    return(
        <div className="card-container">

            <img className="card-imagem" width={"200px"} src={dadosTrilha.urlImagem} alt="imagem-trilha" /> 
            <h1>{dadosTrilha.nomeTrilha}</h1>
            <span>{dadosTrilha.cidade}/{dadosTrilha.estado}</span>
     
        
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