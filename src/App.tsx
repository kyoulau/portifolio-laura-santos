import { createBrowserRouter } from "react-router-dom"
import NotFound from "./pages/500"
import Blogs from "./pages/Blogs"
import Projetos from "./pages/Projetos"
import Sobre from "./pages/Sobre"
import Home from "./pages/Home"
import { Layout } from "./components/Layout"
import SinglePostPage from "./pages/Blogs/[id]"

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
    path: "/blog",
    element: <Blogs />,
  },
  {
    path: "/blog/:id",
    element: <SinglePostPage />,

  },
  {
    path: "*",
    element: <NotFound />,
  
  }
    ]
  }
])

export { router }