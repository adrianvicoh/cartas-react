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
import adminLista from './adminLista'
import Cartas from './cartas'


/*<Route index element={<Llista />} />
          <Route path="/recepta/:id" element={<Recepta />} />
          <Route path="/about" element={<About />} />
          <Route element={<NotFound />} />*/

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
