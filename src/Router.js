//1. IMPORT
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Artesanias from './components/Arte'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Home from './components/Home'
import Layout from './components/Layout'
import ArteState from './context/Artesania/ArteState'


//2. FUNCTION:
const Router = () => {

  return (
    <>
    <ArteState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            
            <Route path="registro" element={<Register />} />
            <Route path="iniciar-sesion" element={<Login />} />

            <Route path="artesanias" element={<Artesanias />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </ArteState>
    </>
  )
}


//3.EXPORT
export default Router
