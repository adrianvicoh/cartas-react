import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import './App.css'
import BaseController from './controllers/BaseController';
import { Container, Row, Col, Form } from 'react-bootstrap';

function EditarCarta() {

  const [carta, setCarta] = useState(null)

  const { id } = useParams()
  const { juego } = useParams()

  let tableId, tableName;

  if (juego === 'yu-gi-ho') {
    tableId = 'mna1v9pmt69h5rd'
    tableName = "Yu-Gi-Ho"
  } else {
    tableId = 'mu0huocera3el49'
    tableName = "Pokémon"
  }

  useEffect(() => {

    const cartasController = new BaseController(tableId, tableName);

    async function getCarta() {
      const cartaData = await cartasController.getItemById(id);
      if (cartaData) {
        setCarta(cartaData);
      } else {
        console.log(cartaData)
      }
    }

    getCarta();

  }, [])

  if (!carta) {
    return (
      <>
        <h1>No hay carta</h1>
      </>
    )
  }

  console.log(carta)

  return (
    <>
      <Container>
        <Row>
          <Col xs={6}>
            <div className='m-4'>
              <h1>{"Editar ID #" + carta.Id}</h1>
              <h6  className='mb-3'>Juego: {tableName}</h6>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control placeholder="Nombre" defaultValue={carta.Nombre} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Tipo</Form.Label>
                <Form.Control placeholder="Tipo" defaultValue={carta.Tipo} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Debilidad</Form.Label>
                <Form.Control placeholder="Debilidad" defaultValue={carta.Debilidad} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Resistencia</Form.Label>
                <Form.Control placeholder="Resistencia" defaultValue={carta.Resistencia} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Precio</Form.Label>
                <Form.Control placeholder="Precio" defaultValue={carta.precio} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Ataque</Form.Label>
                <Form.Control placeholder="Ataque" defaultValue={carta.ATK} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Defensa</Form.Label>
                <Form.Control placeholder="Defensa" defaultValue={carta.DEF} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control placeholder="Descripción" defaultValue={carta.Descripción} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Disabled select menu</Form.Label>
                <Form.Select disabled>
                  <option>Disabled select</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Can't check this" disabled />
              </Form.Group>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default EditarCarta