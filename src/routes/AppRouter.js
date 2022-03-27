import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Carrito from '../pages/Carrito';
import Compra from '../pages/Compra';

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home/> }/>
          <Route path="/Detalles" element={<Compra/>}/>
          <Route path="/Carrito" element={<Carrito/> }/>
        </Routes>
  </BrowserRouter>
    </div>
  )
}

export default AppRouter