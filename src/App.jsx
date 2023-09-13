import './App.css'

//Outlet - disponibiliza a passagem das páginas por ele

import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Outlet/>
    </>
  )
}

export default App
