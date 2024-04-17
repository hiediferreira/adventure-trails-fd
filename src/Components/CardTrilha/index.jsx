import "./style.css"

function CardTrilha({dadosTrilha}){
    return(
        <div>                          
            <img className="card-imagem" width={"200px"} src={dadosTrilha.urlImagem} alt="imagem-trilha" />
            <h1>{dadosTrilha.nomeTrilha}</h1>
            <span>{dadosTrilha.cidade} / {dadosTrilha.estado}</span>
        </div>
    )
}

export default CardTrilha