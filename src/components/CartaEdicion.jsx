import { useEffect, useState } from 'react'
import BaseController from '../controllers/BaseController';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './CartaEdicion.css'

function CartaEdicion(props) {

    const carta = props.carta;
    const juego = props.juego;
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

    async function deleteCarta(idCarta) {
        /*const cartasController = new BaseController(tableId, tableName);
        const response = await cartasController.deleteItem(idCarta);*/
        console.log("A eliminar: " + idCarta)
    }

    return (
        <>
            <Col xs={3}>
                <div className="m-3 text-center">
                    <Image src={carta.Imagen} className="imgEdicion" thumbnail />
                    <div className="m-2">
                        <Link to={'/admin/editar/' + juego + '/' + carta.Id} className="btn btn-primary w-10">Editar</Link>{' '}
                        {/* <Link to='' className="btn btn-danger w-10">Eliminar</Link>{' '} */}
                        <Button className="btn btn-danger w-10" onClick={() => deleteCarta(carta.Id)}>Eliminar</Button>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default CartaEdicion