import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Header() {

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">TCG Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Juegos" id="basic-nav-dropdown">
                                <Link to="/juegos/yu-gi-ho" className='dropdown-item'>Yu-Gi-Ho</Link>
                                <Link to="/juegos/pokemon" className='dropdown-item'>Pokemon</Link>
                            </NavDropdown>
                            <Link to="/noticias" className='nav-link'>Noticias</Link>
                            <Link to="/carro" className='nav-link'>Carrito</Link>
                            <Link to="/admin" className='nav-link'>Admin</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header