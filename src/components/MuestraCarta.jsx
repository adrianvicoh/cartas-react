import { useParams } from "react-router-dom";
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useEffect, useState } from 'react'
import './MuestraCarta.css'

function MuestraCarta(props) {

    let carta = props.carta;

    return (
        <>
            <div className="muestraGeneral m-3 p-3 bg-success-subtle rounded">
                <Row>
                    <Col lg={4}><Image src={carta.Imagen} className="imgMuestra" thumbnail /></Col>
                    <Col lg={8}>
                        <h5>{carta.Nombre}</h5>
                        <p></p>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default MuestraCarta