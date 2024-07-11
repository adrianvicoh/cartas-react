import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './AdminCarta.css'
import { Link } from "react-router-dom";

function AdminCarta(props) {

    let carta = props.carta;
    let juegoId = props.juegoId;

    return (
        <>
            <div className="">
                <Row>
                    <Image src={carta.Imagen} className="imgAdmin" thumbnail />
                </Row>
                <Row>

                </Row>
            </div>
        </>
    )
}

export default AdminCarta