import { Navbar, Nav, Container, NavDropdown, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css'

function Header() {

    return (
        <>
            <div className='estiloNavbar bg-light'>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container className='justify-content-center'>
                        <Navbar.Brand href="/">TCG Store</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link to="/noticias" className='nav-link'>Noticias</Link>
                                <Link to="/carro" className='nav-link'>Carrito</Link>
                                <Link to="/admin" className='nav-link'>Admin</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            <div className='estiloNavbar bg-light'>
                <Link to="/juegos/yu-gi-ho" ><img src='./img/yu-gi-ho.jpg' height={80} width={180} /></Link>
                <Link to="/juegos/pokemon" ><img src='./img/pokemon.png' height={80} width={160} /></Link>
                <Link to="/juegos/magic" ><img src='./img/magic.png' height={80} width={120} /></Link>
                <Link to="/juegos/dragonball" ><img src='./img/dragonball.webp' height={80} width={160} /></Link>
            </div>
        </>
    )
}

export default Header