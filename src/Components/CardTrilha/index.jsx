import * as PropTypes from "prop-types"
import "./style.css"

import {FaStar, FaRegHeart, FaHeart} from "react-icons/fa"

// <FaHeart color={"red"} />  Coração vermelho


function CardTrilha({dadosTrilha}){

    return(
        <div className="card-container">
            <img className="card-imagem" width={"200px"} src={dadosTrilha.urlImagem} alt="imagem-trilha" />

            <div className="card-container-dados">
                <p className="card-titulo">
                    {dadosTrilha.nomeTrilha} - {dadosTrilha.cidade}/{dadosTrilha.estado}
                    <FaRegHeart style={{marginLeft:"10px"}}/>
                </p>
                
                <p className="card-nome">Por: {dadosTrilha.nomeUsuario}</p>

                <p className="card-duracao">Duração: {dadosTrilha.duracao} min</p>

                <p className="card-trajeto">Trajeto: {dadosTrilha.trajeto} km</p>
                {/* <p> <FaHeart color={"red"} /></p> */}

                <p className="card-dif">{dadosTrilha.dificuldade}</p>

                <div className="card-aval">                    
                    <div className="estrelas">
                        <FaStar color={"rgb(149,4,149)"} className="estrelas" />
                        <FaStar color={"rgb(149,4,149)"} className="estrelas" />
                        <FaStar color={"rgb(149,4,149)"} className="estrelas" />
                        <FaStar color={"rgb(149,4,149)"} />
                    </div>
                                       
                    <a href="#" className="link-aval">Avaliações</a>
                </div>
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