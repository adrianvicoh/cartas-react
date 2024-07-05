import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import BaseController from './controllers/baseController';
import CartaInfo from './components/CartaInfo';

function Cartas() {

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

  const [carta, setCarta] = useState({ Nombre: "prova" });

  useEffect(() => {

    async function getCarta() {
      const cartasController = new BaseController(tableId, tableName);
      const cartaData = await cartasController.getItemById(id);
      console.log("component", cartaData)
      if (cartaData) {
        setCarta(cartaData);
      } else {
        console.log(cartaData)
      }
    }

    getCarta();

  }, [])

  /*const {cartaString} = useParams()
  const carta = JSON.parse(cartaString)*/

  return (
    <>
      <p>Cartas</p>
      <CartaInfo carta={carta} />
    </>
  )
}

export default Cartas