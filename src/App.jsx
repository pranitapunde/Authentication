import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Rejester from './components/Rejester'
import Loging from './components/Loging'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <Router>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rejester' element={<Rejester />} />
        <Route path='/login' element={<Loging />} />
      </Routes>
      <ToastContainer/>

    </Router>
  )
}

export default App
