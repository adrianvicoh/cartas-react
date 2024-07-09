import { useEffect, useState } from 'react'
import BaseController from './controllers/BaseController';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './App.css'
import CartaEdicion from './components/CartaEdicion.jsx'

function AdminHome() {

  const [cartas, setCartas] = useState([{}]);
  const [juego, setJuego] = useState("yu-gi-ho");
  let tableId, tableName;

  useEffect(() => {

    if (juego === 'yu-gi-ho') {
      tableId = 'mna1v9pmt69h5rd'
      tableName = "yugiho"
    } else {
      tableId = 'mu0huocera3el49'
      tableName = "pokemon"
    }

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

  }, [juego])

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
          <div class="d-grid gap-2 d-md-block">
            <Button className="btn btn-primary m-3" onClick={() => setJuego('yu-gi-ho')}>Yu-Gi-Ho</Button>
            <Button className="btn btn-primary m-3" onClick={() => setJuego('pokemon')}>Pokémon</Button>
          </div>
        </Row>
        <Row>
          {cartas.map(carta => {
            <CartaEdicion carta={carta} idTabla={juego}/>
          })}
        </Row>
      </Container>
    </>
  )
}

export default AdminHome