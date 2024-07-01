import { useEffect, useState } from 'react'
import './App.css'
import { useParams } from "react-router-dom";
import BaseController from './controllers/baseController';
import CatalogoMuestra from './components/CatalogoMuestra'


function Juegos() {

  const { id } = useParams()
  let tableId, tableName;

  if (id === 'yu-gi-ho') {
    tableId = 'mna1v9pmt69h5rd'
    tableName = "yugiho"
  } else {
    tableId = 'mu0huocera3el49'
    tableName = "pokemon"
  }

  const [cartas, setCartas] = useState([]);

  useEffect(() => {

    async function getAllReceptes() {
      const cartasController = new BaseController(tablename, tableId);
      const cartasData = await cartasController.getAll();
      if (cartasData.length) {
        setCartas(cartasData);
      } else {
        console.log(cartasData)
      }
    }

    getAllReceptes();

  }, [])

  return (
    <>
      <p>Juegos</p>
      <p>{id}</p>
    </>
  )
}

export default Juegos