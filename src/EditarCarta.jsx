import { useState } from 'react'
import { useParams } from "react-router-dom";
import './App.css'
import BaseController from './controllers/BaseController';

function EditarCarta() {

  const [carta, setCarta] = useState({})

  const { id } = useParams()
  const { juego } = useParams()

  let tableId, tableName;

  if (juego === 'yu-gi-ho') {
    tableId = 'mna1v9pmt69h5rd'
    tableName = "yugiho"
  } else {
    tableId = 'mu0huocera3el49'
    tableName = "pokemon"
  }

  const cartasController = new BaseController(tableId, tableName);

  async function getCarta() {
    const cartaData = await cartasController.getItemById(id);
    if (cartaData) {
      setCarta(cartaData);
    } else {
      console.log(cartaData)
    }
  }

  getCarta();
  
  return (
    <>
      <p>Editar Carta</p>
      <p>{carta.Nombre}</p>
    </>
  )
}

export default EditarCarta