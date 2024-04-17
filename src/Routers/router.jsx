import App from "../App.jsx"
import Cadastro from "../Pages/Cadastro.jsx"
import Home from "../Pages/Home.jsx"
import Lista from "../Pages/Lista.jsx"
import PaginaErro from "../Pages/PaginaErro.jsx"
import { createBrowserRouter} from "react-router-dom"

const routers = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <PaginaErro />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cadastro',
                element: <Cadastro />
            },
            {
                path: '/lista',
                element: <Lista />
            }
        ]
    }
])

export default routers