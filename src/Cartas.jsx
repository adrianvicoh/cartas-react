import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import BaseController from './controllers/BaseController';
import CartaInfo from './components/CartaInfo';

function Cartas() {

  const { id } = useParams()
  const { juegoId } = useParams()

  let tableId, tableName;

  if (juegoId === 'yu-gi-ho') {
    tableId = 'mna1v9pmt69h5rd'
    tableName = "yugiho"
  } else {
    tableId = 'mu0huocera3el49'
    tableName = "pokemon"
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