import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from "react-router"
import Home from './pages/Home'
import PublicRoute from './routes/PublicRoute'

function App() {
  

  return (
    <>
     <PublicRoute/>

     </>
  )
}

export default App
