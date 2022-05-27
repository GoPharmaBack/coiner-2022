import React from 'react'
import { Link } from 'react-router-dom'
function NotFound () {
  return (
    <>
      <section className="App-header notfound">
        <div className="contenedor">
        <h1>404</h1>
          <h2>Página no encontrada</h2>
          <br />
    <Link to="/"> <button className="btn-primary">Regresar</button></Link>
    </div>
    </section>
    </>
  )
}

export default NotFound
