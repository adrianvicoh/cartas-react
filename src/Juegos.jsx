import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import BaseController from './controllers/BaseController';
import CatalogoMuestra from './components/CatalogoMuestra'
import FiltroMarca from './components/FiltroMarca'

function Juegos() {

  const { id } = useParams()
  let tableId, tableName;

  if (id === 'Yu-Gi-Ho') {
    tableId = 'mna1v9pmt69h5rd'
    tableName = "yugiho"
  } else if(id === 'Pokemon'){
    tableId = 'mu0huocera3el49'
    tableName = "pokemon"
  } else if(id === 'Magic:The Gathering'){
    tableId = 'mwfhammpc10rp9k'
    tableName = 'Magic'
  } else if(id === 'Dragon Ball'){
    tableId = 'mwwmrnif2aa0wff'
    tableName = 'Dragon'
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
      <Container>
        <Row>
          <Col xs={3}><FiltroMarca /></Col>
          <Col xs={9}><CatalogoMuestra cartasContent={cartas} juegoId={id} /></Col>
        </Row>
      </Container>
    </>
  )
}

export default Juegos