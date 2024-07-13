import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CrearCarta from './CrearCarta.jsx'
import EditarCarta from './EditarCarta.jsx'
import Juegos from './Juegos.jsx'
import Noticias from './Noticias.jsx'
import AdminHome from './AdminHome.jsx'
import Cartas from './Cartas.jsx'
import Home from './Home.jsx'
import NoticiaContent from './NoticiaContent.jsx'
import Carrito from './Carrito.jsx'
import Admin from './Admin.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/cartas/:juego/:id" element={<Cartas />} />
          <Route path="/juegos/:id" element={<Juegos />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias/:id" element={<NoticiaContent />} />
          <Route path="/carro" element={<Carrito />} />
          <Route path="/admin" element={<Admin />}>
            <Route index element={<AdminHome />} />
            <Route path="/admin/crear" element={<CrearCarta />} />
            <Route path="/admin/editar/:juego/:id" element={<EditarCarta />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
