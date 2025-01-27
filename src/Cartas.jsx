import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import BaseController from './controllers/BaseController';
import CartaInfo from './components/CartaInfo';

function Cartas() {

  const { id } = useParams()
  const { juego } = useParams()

  let tableId, tableName;

  if (juego === 'yu-gi-ho') {
    tableId = 'mna1v9pmt69h5rd'
    tableName = "yugiho"
  } else if (juego === 'pokemon'){
    tableId = 'mu0huocera3el49'
    tableName = "pokemon"
  } else if (juego === 'magic'){
    tableId = 'mwfhammpc10rp9k'
    tableName = "magic"
  } else if (juego === 'dragonball'){
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
        <Row>
          <p>Cartas</p>
          <CartaInfo carta={carta} juego={juego} />
        </Row>
      </Container>
    </>
  )
}

export default Cartas