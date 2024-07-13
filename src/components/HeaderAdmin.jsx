import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css'

function HeaderAdmin() {

    return (
        <>
            <div className='estiloNavbar bg-light'>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link to="/admin" className='nav-link'>Editar cartas</Link>
                                <Link to="/admin/crear" className='nav-link'>Crear carta</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default HeaderAdmin