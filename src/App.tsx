import { createBrowserRouter } from "react-router-dom"
import NotFound from "./pages/500"
import Contato from "./pages/Contato"
import Projetos from "./pages/Projetos"
import Sobre from "./pages/Sobre"
import Home from "./pages/Home"
import { Layout } from "./components/Layout"

const router = createBrowserRouter([
  {
    element: <Layout />,
    children:  [
        {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
  {
    path: "/projetos-bala",
    element: <Projetos />,
  },
  {
    path: "/contato",
    element: <Contato />,
  },
  {
    path: "*",
    element: <NotFound />,
  
  }
    ]
  }
])

export { router }