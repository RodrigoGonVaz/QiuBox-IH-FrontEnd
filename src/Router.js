//1. IMPORT
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Qiubox from '../src/components/Qiubox/Qiubox'
import Artesanias from './components/Arte'
import CreaArtesania from './components/Arte/Create'
import Single from './components/Arte/Single'
import EditArte from './components/Arte/Single/Edit'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Home from './components/Home'
import Layout from './components/Layout'
import SingleQiubox from './components/Qiubox/SingleQiubox'
import Profile from './components/User/Profile'
import ArteState from './context/Artesania/ArteState'
import QiuboxState from './context/Qiubox/QiuboxState'
import UserState from './context/User/UserState'
import data from './estados.json'
import Auth from './routes/Auth'
import Private from "./routes/Private"



//2. FUNCTION:
const Router = () => {

  return (
    <>
    <UserState>
        <ArteState>
          <QiuboxState>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                
                <Route path="registro" element={<Auth component={Register} />} />
                <Route path="iniciar-sesion" element={<Auth component={Login} />} />

                <Route path="profile" element={<Private component={Profile} />} />

                <Route path="artesanias" element={<Artesanias />} />
                <Route path="artesanias/:id" element={<Single />} />
                <Route path="artesanias/crear" element={<CreaArtesania />} />
                <Route path="artesanias/editar/:id" element={<EditArte />} />

                <Route path="qiubox" element={ <Qiubox /> } />
                <Route path="qiubox/:id" element={ <SingleQiubox /> } />
                

              </Route>
            </Routes>
          </BrowserRouter>
          </QiuboxState>
        </ArteState>
    </UserState>
    </>
  )
}


//3.EXPORT
export default Router
