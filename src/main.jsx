import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CrearCarta from './crearCarta.jsx'
import EditarCarta from './editarCarta.jsx'
import Juegos from './juegos.jsx'
import Noticias from './noticias.jsx'
import AdminHome from './adminHome.jsx'
import Cartas from './cartas.jsx'
import Home from './home.jsx'
import NoticiaContent from './noticiaContent.jsx'
import Carrito from './carrito.jsx'
import Admin from './admin.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/cartas/:id" element={<Cartas />} />
          <Route path="/juegos/:id" element={<Juegos />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias/:id" element={<NoticiaContent />} />
          <Route path="/carro" element={<Carrito />} />
          <Route path="/admin" element={<Admin />}>
            <Route index element={<AdminHome />} />
            <Route path="/admin/crear" element={<CrearCarta />} />
            <Route path="/admin/editar/:id" element={<EditarCarta />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
