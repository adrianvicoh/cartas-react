import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import crearCarta from './crearCarta'
import editarCarta from './editarCarta'
import Juegos from './juegos'
import Noticias from './noticias'
import adminHome from './adminHome'
import Cartas from './cartas'
import Home from './home.jsx'
import noticiaContent from './noticiaContent.jsx'
import Carrito from './carrito.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/cartas/:id" element={<Cartas />} />
          <Route path="/juegos/:id" element={<Juegos />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias/:id" element={<noticiaContent />} />
          <Route path="/carro" element={<Carrito />} />
          <Route element={<NotFound />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<adminHome />} />
          <Route path="/admin/crear" element={<crearCarta />} />
          <Route path="/admin/editar/:id" element={<editarCarta />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
