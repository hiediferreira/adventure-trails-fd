import CardTrilha from "./Components/CardTrilha"
import Header from "./Components/CardHeader/Header.jsx"
import Footer from "./Components/CardFooter/Footer.jsx"
import "./App.css"

function App() {  
  return (
    <div className="container">
      <Header />
      <h1 className="titulo">Explore trilhas incríveis</h1>
      <CardTrilha />
      <Footer />
    </div>
  )
}

export default App
