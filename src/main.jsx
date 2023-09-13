import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import Produtos from './routes/Produtos/index.jsx'
import Error from './routes/Error/index.jsx'
import EditarProdutos from './routes/EditarProdutos/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>, 
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path: "/produtos",
        element: <Produtos/>
      },
      {
        path:"/produtos/editar/:id",
        element: <EditarProdutos/>
      }
    ]
  }
])

//errorElement - mostra o componente a ser apresentado caso a URL não exista.
//children - atributo de App que vai armazenar um array (coleção de obejtos, como uma lista) os objetos de todas as páginas que podem ser acessadas. 
//path - define a URI da página após o endereço do projeto no browser.
//element - define o componente que vai ser chamado quando a URI for chamada no browser 

//RouterProvider - Controla a renderização das páginas no ReactDom.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
