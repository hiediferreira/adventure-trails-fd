import * as PropTypes from "prop-types"
import "./style.css"
import { useEffect, useState } from "react"
import useFetch from "../Hooks/useFetch.js"
import {FaStar, FaRegHeart, FaHeart} from "react-icons/fa"
// <FaHeart color={"red"} />  Coração vermelho

function CardTrilha({dadosTrilha}){
    const [trilhas] = useFetch("/trilhas.json") //Consumindo o arquivo trilhas.json

    return(
        <div>
            {trilhas && trilhas.map((dados, index) => (  //se existri alguma trilha cadastrada então:
                <div className="card-container" key={index}>                
                    <img className="card-imagem" width={"200px"} src={dados.urlImagem} alt="imagem-trilha" />
                    <div className="card-container-dados">
                        <p className="card-titulo">
                            {dados.nomeTrilha} - {dados.cidade}/{dados.estado}
                            <FaRegHeart style={{marginLeft:"10px"}}/>
                        </p>                
                        <p className="card-nome">Por: {dados.nomeUsuario}</p>
                        <p className="card-duracao">Duração: {dados.duracao} min</p>
                        <p className="card-trajeto">Trajeto: {dados.trajeto} km</p>
                        {/* <p> <FaHeart color={"red"} /></p> */}
                        <p className="card-dif">{dados.dificuldade}</p>
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
            ))}
        </div>
    )
}

// CardTrilha.propTypes = {
//     dadosTrilha: PropTypes.exact({
//         nomeTrilha: PropTypes.string.isRequired,
//         cidade: PropTypes.string,
//         estado: PropTypes.string,
//         duracao: PropTypes.number,
//         trajeto: PropTypes.number,
//         dificuldade: PropTypes.string,
//         tipo: PropTypes.oneOf(['Caminhada', 'Ciclismo']),
//         nomeUsuario: PropTypes.string,
//         urlImagem: PropTypes.string
//     })
// }

export default CardTrilha