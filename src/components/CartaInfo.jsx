import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

function CartaInfo(props) {

    const carta = props.carta;
    const juego = props.juego;

    function AddToCart(juego, idCarta) {
        let nuevoCarro = [...carro, {juego, idCarta}];
        setCarro(nuevoCarro);
        Cookies.set("carro", JSON.stringify(nuevoCarro))
    }

    return (
        <>
            <div className="cartaInfoGeneral">
                <Row>
                    <Col lg={3}>
                        <Image src={carta.Imagen} className="imgCartaInfo" thumbnail />
                    </Col>
                    <Col lg={9}>
                        <h2>{carta.Nombre}</h2>
                        <p>ID: {carta.Id}</p>
                        <h5>Atributo: {carta.Atributo} | Tipo: {carta.TipoDeCarta}</h5>
                        <h5>Defensa: {carta.DEF}</h5>
                        <h6></h6>
                        <p><strong>Descripción:</strong> {carta.Descripción}</p>
                        <h4>Precio: {carta.precio} €</h4>
                        <Button onClick={()=>AddToCart(juego, carta.Id)}>Añadir al carro</Button>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default CartaInfo