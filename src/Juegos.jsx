import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import BaseController from './controllers/baseController';
import CatalogoMuestra from './components/CatalogoMuestra'
import FiltroMarca from './components/FiltroMarca'

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

    async function getAllCartas() {
      const cartasController = new BaseController(tableId, tableName);
      const cartasData = await cartasController.getAll();
      if (cartasData.length) {
        setCartas(cartasData);
      } else {
        console.log(cartasData)
      }
    }

    getAllCartas();

  }, [cartas])

  if (cartas.length == 0) {
    return (
      <>
        <h1>No hay cartas</h1>
      </>
    )
  }

  return (
    <>
      <Container>
        <Row>
          <Col xs={3}><FiltroMarca /></Col>
          <Col xs={9}><CatalogoMuestra cartasContent={cartas} juegoId={id}/></Col>
        </Row>
      </Container>
    </>
  )
}

export default Juegos