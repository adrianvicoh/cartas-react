import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import './App.css'
import BaseController from './controllers/BaseController';
import { Container, Row, Col, Form, Image } from 'react-bootstrap';

function EditarCarta() {

  const [carta, setCarta] = useState(null)

  const { id } = useParams()
  const { juego } = useParams()

  let tableId, tableName;

  if (juego === 'yu-gi-ho') {
    tableId = 'mna1v9pmt69h5rd'
    tableName = "Yu-Gi-Ho"
  } else if (juego === 'pokemon') {
    tableId = 'mu0huocera3el49'
    tableName = "Pokémon"
  } else if (juego === 'magic') {
    tableId = 'mwfhammpc10rp9k'
    tableName = "Magic: The Gathering"
  } else if (juego === 'dragonball') {
    tableId = 'mwwmrnif2aa0wff'
    tableName = "Dragon Ball"
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

  function headerForm() {
    return (
      <>
        <Row>
          <h1>{"Editar ID #" + carta.Id}</h1>
          <h6 className='mb-3'>Juego: {tableName}</h6>
        </Row>
      </>
    )
  }

  function baseForm() {
    return (
      <>
        <Col xs={6}>
          <Form.Group className="mb-3">
            <Form.Label>Imagen</Form.Label><br />
            <Image src={carta.Imagen} className="imgEdicion mb-3" thumbnail />
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control placeholder="Nombre" defaultValue={carta.Nombre} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control placeholder="Precio" defaultValue={carta.precio} />
          </Form.Group>
        </Col>
      </>
    )
  }

  if (juego === 'yu-gi-ho') {
    return (
      <>
        <Container>
          <div className='m-4 text-light'>
            {headerForm()}
            <Row>
              {baseForm()}
              <Col xs={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Tipo</Form.Label>
                  <Form.Control placeholder="Tipo" defaultValue={carta.Tipo} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Atributo</Form.Label>
                  <Form.Control placeholder="Atributo" defaultValue={carta.Atributo} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Tipo de carta</Form.Label>
                  <Form.Control placeholder="Tipo de carta" defaultValue={carta.TipoDeCarta} />
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
                  <Form.Control placeholder="Descripción" type="textarea" defaultValue={carta.Descripción} />
                </Form.Group>
              </Col>
            </Row>
          </div>
        </Container>
      </>
    )
  } else if(juego === 'pokemon') {

  } else if(juego === 'magic') {

  } else if(juego === 'dragonball') {

  }

  return (
    <>

    </>
  )
}

export default EditarCarta