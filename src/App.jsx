// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import './App.css'
import Cabecalho from './componentes/cabecalho/cabecalho'
import Principal from './componentes/principal/principal'
import Rodape from './componentes/rodape/rodape'
import Roteador from './Roteador'





function App() {
  return (
   <>
    <Cabecalho/>
    <Roteador />
    <Rodape/>
    <ToastContainer />
   </>
  )
}

export default App
