import { useParams } from "react-router-dom";
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useEffect, useState } from 'react'
import MuestraCarta from "./MuestraCarta";

function CatalogoMuestra(props) {

    let cartas = props.cartasContent;
    let juego = props.juego;

    return (
        <>
            <p>Catalogo muestra</p>
            <Row>
                {cartas.map(carta => (
                    <Col key={carta.Id} xs={6}>
                        <MuestraCarta carta={carta} juego={juego}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default CatalogoMuestra