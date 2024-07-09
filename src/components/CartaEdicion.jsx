import { useEffect, useState } from 'react'
import BaseController from '../controllers/BaseController';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function CartaEdicion(props) {

    const carta = props.carta;
    const idTabla = props.idTabla;

    return (
        <>
            <Col xs={3}>
                <div className="m-2">
                    <Image src={carta.Imagen} className="imgMuestra" thumbnail />
                    <Link to='' className='btn btn-primary'>Editar</Link>
                    <Link to='' className='btn btn-danger'>Eliminar</Link>
                </div>
            </Col>
        </>
    )
}

export default CartaEdicion