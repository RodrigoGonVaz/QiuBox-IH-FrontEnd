//1. IMPORT
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'


//2. FUNCTION:
const Router = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}


//3.EXPORT
export default Router
