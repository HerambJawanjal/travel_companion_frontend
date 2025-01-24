import React from 'react'
import { Route, Routes } from "react-router"
import Home from '../pages/Home'
import Login from '../pages/Login'
import Registration from '../pages/Registration'

const PublicRoute = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
    </Routes>
    </>
    
  )
}

export default PublicRoute