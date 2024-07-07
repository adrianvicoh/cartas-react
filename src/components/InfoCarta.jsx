import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react'
import MuestraCarta from "./MuestraCarta";

function InfoCarta(props) {

    let carta = props.carta;
    let juegoId = props.juegoId;

    return (
        <>
            <div className="mt-4 mb-4">
                <Row>
                    <Col lg={3}>
                        <Image src={carta.Imagen} className="" thumbnail />
                    </Col>
                    <Col lg={9}>
                        <h1>{carta.Nombre}</h1>
                        <p>ID: {carta.Id}</p>
                        <h5>Tipo: {carta.Tipo}</h5>
                        <h6>Debilidad: {carta.Debilidad} | Resistencia: {carta.Resistencia}</h6>
                        <p>DEF: {carta.DEF} | ATK: {carta.ATK}</p>
                        <p><strong>Descripción:</strong> {carta.Descripción}</p>
                        <h5>Precio: {carta.precio}</h5>
                        <Button className="btn-primary">Añadir al carrito</Button>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default InfoCarta