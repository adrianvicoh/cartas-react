import { useEffect, useState } from 'react'
import BaseController from './controllers/BaseController';
import './App.css'

function AdminHome() {

  const [cartas, setCartas] = useState([]);

  const tablas = ['mna1v9pmt69h5rd', 'mu0huocera3el49']

  async function addCartas(tabla) {
    let cartasController = new BaseController(tabla, "tableName");
    let cartasData = await cartasController.getAll();
    if (cartasData.length) {
      cartasData.map(carta => {
        carta.tabla = tabla
        setCartas(cartas.push(carta));
      })
    } else {
      console.log(cartasData)
    }
  }

  useEffect(() => {

    async function getAllCartas() {
      tablas.map(addCartas)
    }

    getAllCartas();

  }, [])

  if (cartas.length == 0) {
    return (
      <>
        <h1>No hay cartas</h1>
      </>
    )
  }

  return (
    <>
      <p>Admin Home</p>
      {console.log(cartas)}
    </>
  )
}

export default AdminHome