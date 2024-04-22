import styles from "./cardTrilha.module.css"
import {FaStar, FaRegHeart, FaHeart} from "react-icons/fa"
import { useState } from "react"


function CardTrilha({dadosTrilha}){
    const [favorito, setFavorito] = useState(false)

    return(   
        <div className={styles.cardContainer}>                          
            <img className={styles.cardImagem} width={"200px"} src={dadosTrilha.urlImagem} alt="imagem-trilha" />

            <div className={styles.cardDados}>
                <p className={styles.cardTitulo}>
                    {dadosTrilha.nomeTrilha} - {dadosTrilha.cidade}/{dadosTrilha.estado}
                    <button className={styles.favButton} onClick={()=> setFavorito((fav) => !fav)}>
                        {favorito ? <FaHeart style={{color:'red'}} /> : <FaRegHeart  />}
                    </button> 
                </p>

                <p className={styles.cardNome}>Por: {dadosTrilha.nomeUsuario}</p>

                <p className={styles.cardDuracao}>Duração: {dadosTrilha.duracao} min</p>

                <p className={styles.cardTrajeto}>Trajeto: {dadosTrilha.trajeto} km</p>

                <p className={styles.cardDif}>{dadosTrilha.dificuldade}</p>

                <div className={styles.cardAval}>                    
                    <div className={styles.estrelas}>
                        <FaStar style={{marginRight:"5px"}}/>
                        <FaStar style={{marginRight:"5px"}}/>
                        <FaStar style={{marginRight:"5px"}}/>
                        <FaStar style={{marginRight:"5px"}}/>
                        <FaStar />
                    </div>                                       
                    <a href="#" className={styles.linkAval}>Avaliações</a>
                </div>
            </div>
        </div>
    )
}

export default CardTrilha
