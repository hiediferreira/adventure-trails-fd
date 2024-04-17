import Header from "./Components/CardHeader/Header.jsx"
import Footer from "./Components/CardFooter/Footer.jsx"
import "./App.css"
import { Outlet } from "react-router-dom"
import { TrilhasContextProvider } from "./Context/TrilhasContext.jsx"

function App() {  
  return (
    <TrilhasContextProvider>

      <Header />
      <Outlet />
      <Footer />

    </TrilhasContextProvider>
  )
}

export default App
