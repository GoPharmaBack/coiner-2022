import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../views/Home.jsx'
import NotFound from '../views/NotFound.jsx'

function GeneralRoutes () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<NotFound/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default GeneralRoutes
