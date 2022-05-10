import React from 'react'
import logo from './logo.svg'
import Portada from './img/logo_portada_coiner_2022.png'
import './scss/index.scss'

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <p></p>
        <img src={Portada} className="logo-portada" alt="" />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  )
}

export default App
