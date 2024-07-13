import { Row, Col, Image } from 'react-bootstrap';
import './MuestraCarta.css'
import { Link } from "react-router-dom";

function MuestraCarta(props) {

    const carta = props.carta;
    const juego = props.juego;

    // const cartaString = JSON.stringify(carta)

    return (
        <>
            <div className="muestraGeneral m-3 p-3 bg-success-subtle rounded">
                <Row>
                    <Col lg={4}>
                        {/* <Link to={"/cartas/" + cartaString} > */}
                        <Link to={"/cartas/" + juego + "/" + carta.Id} >
                            <Image src={carta.Imagen} className="imgMuestra" thumbnail />
                        </Link>
                    </Col>
                    <Col lg={8}>
                        <h5>{carta.Nombre}</h5>
                        <h6>{carta.Tipo}, {carta.Atributo}</h6>
                        <p>Defensa: {carta.DEF}<br />Precio: {carta.precio}</p>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default MuestraCarta