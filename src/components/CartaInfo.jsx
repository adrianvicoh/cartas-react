import { Container, Row, Col, Image } from 'react-bootstrap';
import { useEffect, useState } from 'react'


function CartaInfo(props) {

    let carta = props.carta;

    return (
        <>
            <p>CartaInfo</p>
            <h1>{carta.Nombre}</h1>
        </>
    )
}

export default CartaInfo