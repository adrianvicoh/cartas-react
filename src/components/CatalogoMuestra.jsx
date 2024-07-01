import { useParams } from "react-router-dom";
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useEffect, useState } from 'react'

function CatalogoMuestra(props) {

    let cartas = props.cartasContent;

    console.log(cartas)

    return (
        <>
            <p>Catalogo muestra</p>
            <Row>
                {cartas.map(carta => (
                    <Col xs={6}>
                        <div className="p-2">
                            <Col xs={6}><Image src={carta.Imagen} thumbnail /></Col>
                        </div>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default CatalogoMuestra