import CardTrilha from "../Components/CardTrilha"
import { useContext } from "react"
import { TrilhasContext } from "../Context/TrilhasContext"
import styles from "./estilosPages.module.css"

function Lista(){
    const {trilhas, isLoading} = useContext(TrilhasContext)

    return(
        <div className="container">
            <h1 className={styles.h1Principal}>Explore trilhas incríveis</h1>            
            {!!trilhas && !isLoading ? (
                trilhas.map((traill, index) => (
                    <CardTrilha dadosTrilha={traill} key={index} />
                ))
                ) : (
                    <span>Não há dados disponíveis</span>
                )
            }
        </div>
    )
}

export default Lista