import CardTrilha from "./Components/CardTrilha"
import "./App.css"

function App() {

  const listaTrilhas = [
    {
      nomeTrilha: "Trilha da costa da Lagoa",
      cidade: "Florianópolis",
      estado: "SC",
      duracao: 120,
      trajeto: 5.75,
      dificuldade: "Média",
      tipo: "Caminhada",
      nomeUsuario: "Hiédi",
      urlImagem: "./src/assets/Costa-lagoa.jpeg"
      //urlImagem: ".\src\assets\Costa-lagoa.jpeg"
      //urlImagem: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      nomeTrilha: "Trilha do Poção",
      cidade: "Florianópolis",
      estado: "SC",
      duracao: 25,
      trajeto: 0.7,
      dificuldade: "Iniciante",
      tipo: "Caminhada",
      nomeUsuario: "Hiédi",
      urlImagem: "./src/assets/trilha-pocao.jpeg"
    },
    {
      nomeTrilha: "Trilha do Canto dos Ingleses",
      cidade: "Florianópolis",
      estado: "SC",
      duracao: 50,
      trajeto: 2.5,
      dificuldade: "Iniciante",
      tipo: "Caminhada",
      nomeUsuario: "Hiédi",
      urlImagem: "./src/assets/trilha-ingleses.jpeg"
      //urlImagem: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      nomeTrilha: "Trilha da costa da Lagoa",
      cidade: "Florianópolis",
      estado: "SC",
      duracao: 120,
      trajeto: 4,
      dificuldade: "Iniciante",
      tipo: "Caminhada",
      nomeUsuario: "Hiédi",
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
