import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import BaseController from './controllers/BaseController';
import InfoCarta from './components/InfoCarta';

function Cartas() {

  const { id } = useParams()
  const { juegoId } = useParams()

  let tableId, tableName;

  if (id === 'yu-gi-ho') {
    tableId = 'mna1v9pmt69h5rd'
    tableName = "yugiho"
  } else if (id === 'pokemon'){
    tableId = 'mu0huocera3el49'
    tableName = "pokemon"
  } else if (id === 'magic'){
    tableId = 'mwfhammpc10rp9k'
    tableName = "magic"
  } else if (id === 'dragonball'){
    tableId = 'mwwmrnif2aa0wff'
    tableName = "dragonball"
  }

  const [carta, setCarta] = useState([]);

  useEffect(() => {

    async function getCarta() {
      const cartasController = new BaseController(tableId, tableName);
      const cartaData = await cartasController.getItemById(id);
      if (cartaData) {
        setCarta(cartaData);
      } else {
        console.log(cartaData)
      }
    }

    getCarta();

  }, [])

  return (
    <>
    <Container>
      <InfoCarta carta={carta} juegoId={juegoId}/>
    </Container>
    </>
  )
}

export default Cartas