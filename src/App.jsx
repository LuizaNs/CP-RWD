import './App.css'

//Outlet - disponibiliza a passagem das páginas por ele

import { Outlet } from 'react-router-dom'
import Menu from './components/Menu'
import Rodape from './components/Rodape'

function App() {

  return (
    <>
      <Menu/>
      <Outlet/>
      <Rodape/>
    </>
  )
}

export default App
