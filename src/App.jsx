import React from 'react'

import './scss/index.scss'
import Navbar from './components/NavBar/Navbar'
import GeneralRoutes from './routes/GeneralRoutes'

function App () {
  return (
    <div className="App">
      <Navbar/>
     <GeneralRoutes/>
    </div>
  )
}

export default App
