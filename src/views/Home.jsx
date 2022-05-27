import React from 'react'
import logo from '../logo.svg'
import Portada from '../img/logo_portada_coiner_2022.png'
import '../scss/index.scss'

function Home () {
  return (
    <div className="Home">

      <header className="App-header">
        <p></p>
        <div className="div">
        <img src={Portada} className="logo-portada" alt="" />
        <h1>24, 25, 26 y 27 de Noviembre 2022</h1>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  )
}

export default Home
