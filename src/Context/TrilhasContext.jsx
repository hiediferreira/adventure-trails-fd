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

    return(
        <TrilhasContext.Provider value={{trilhas, setTrilhas, isLoading}}>
            {children}
        </TrilhasContext.Provider>
    )
}   
