//1. IMPORT
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Artesanias from './components/Arte'
import CreaArtesania from './components/Arte/Create'
import Single from './components/Arte/Single'
import EditArte from './components/Arte/Single/Edit'
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

            <Route path="artesanias/:id" element={<Single />} />

            <Route path="artesanias/crear" element={<CreaArtesania />} />

            <Route path="artesanias/editar/:id" element={<EditArte />} />
            

          </Route>
        </Routes>
      </BrowserRouter>
    </ArteState>
    </>
  )
}


//3.EXPORT
export default Router
