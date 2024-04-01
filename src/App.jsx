import CardTrilha from "./Components/CardTrilha"
import "./App.css"

function App() {

  const listaTrilhas = [
    {
      nomeTrilha: "Trilha da costa da Lagoa",
      cidade: "Florianópolis",
      estado: "SC",
      duracao: 120,
      trajeto: 4,
      dificuldade: "Iniciante",
      tipo: "Caminhada",
      nomeUsuario: "Hiédi",
      //urlImagem: "./assets/imagem-trilha.jpg"
      urlImagem: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      nomeTrilha: "Trilha da Costa da Lagoa",
      cidade: "Florianópolis",
      estado: "SC",
      duracao: 120,
      trajeto: 4,
      dificuldade: "Iniciante",
      tipo: "Caminhada",
      nomeUsuario: "Hiédi",
      //urlImagem: "./assets/imagem-trilha.jpg"
      urlImagem: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]

  return (
    <div className="container">
      <h1 className="titulo">Explore trilhas incríveis</h1>
      {
        listaTrilhas.map((trilha, index) => (
          <CardTrilha dadosTrilha={trilha} key={index} />
        ))
      }
    </div>
  )
}

export default App
