import React from 'react'
import { Route, Routes } from "react-router"
import Home from '../pages/Home'
import Login from '../pages/Login'
import Registration from '../pages/Registration'
import SignPage from '../pages/SignPage'


const PublicRoute = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Sign' element={<SignPage/>}/>
      
        <Route path='/Discover' element={<Registration/>}/>
        <Route path='/Trip' element={<Registration/>}/>
        <Route path='/Reviews' element={<Registration/>}/>
    </Routes>
    </>
    
  )
}

export default PublicRoute