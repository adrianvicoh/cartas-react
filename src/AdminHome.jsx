import { useEffect, useState } from 'react'
import BaseController from './controllers/BaseController.js';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './AdminHome.css'
import CartaEdicion from './components/CartaEdicion.jsx'

function AdminHome() {

  const [cartas, setCartas] = useState([{}]);
  const [juego, setJuego] = useState("yu-gi-ho");
  let tableId, tableName;

  useEffect(() => {

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

    const cartasController = new BaseController(tableId, tableName);

    async function getAllCartas() {
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
          <div className="estiloNavbar mb-2">
            <Button className="btn btn-light m-3" onClick={() => setJuego('yu-gi-ho')}>Yu-Gi-Ho</Button>
            <Button className="btn btn-light m-3" onClick={() => setJuego('pokemon')}>Pokémon</Button>
            <Button className="btn btn-light m-3" onClick={() => setJuego('magic')}>Magic</Button>
            <Button className="btn btn-light m-3" onClick={() => setJuego('dragonball')}>Dragon Ball</Button>
          </div>
        </Row>
        <Row>
          {cartas.map((carta,idx) => (
            // <CartaEdicion carta={carta} idTabla={juego} deleteCarta={() => deleteCarta()} />
              <CartaEdicion key={idx} carta={carta} juego={juego} />
          ))}
        </Row>
      </Container>
    </>
  )
}

export default AdminHome