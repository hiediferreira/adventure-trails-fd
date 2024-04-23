import useFetch from "../Components/Hooks/useFetch"
import { useState, useEffect, createContext } from "react";
 
export const TrilhasContext = createContext() 
export const TrilhasContextProvider = ({children}) => { 
    const [dados, isLoading] = useFetch("/trilhas.json")
    const [trilhas, setTrilhas] = useState([])

    useEffect(() => {
        if(!!dados && !isLoading){
            setTrilhas(dados.trilhas)
        }
    }, [dados])

    function addTrilhas(dadoTrilha){
        setTrilhas((t) => [...t, dadoTrilha]) //passamos o que já existe e mais os dados novos
    }

    return(
        <TrilhasContext.Provider value={{trilhas, setTrilhas, isLoading, addTrilhas}}>
            {children}
        </TrilhasContext.Provider>
    )
}   
