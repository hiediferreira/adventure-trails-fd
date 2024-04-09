import { useEffect, useState } from "react";

// Nosso arquivo trilhas.json simula um API de onde vamos consumir os dados

const useFetch = (url) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((value) => {setData(value), console.log(value)})  
            .catch((err) => console.log(err))  
    }, [url])  //useEffect será executado somente quando url mudar
    
    return [data]
}

export default useFetch