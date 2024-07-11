import { Navbar, Nav, Container, NavDropdown, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css'

function Header() {

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
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
            <div className='estiloYugioh'>
                    <Link to="/juegos/Yu-Gi-Ho" ><img src='https://ms.yugipedia.com//thumb/8/8d/Yu-Gi-Oh%21_TCG_new_logo.jpg/1200px-Yu-Gi-Oh%21_TCG_new_logo.jpg' height={80}  width={180} /></Link>
                    <Link to="/juegos/Pokemon" ><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Pok%C3%A9mon_Trading_Card_Game_logo.svg/2560px-Pok%C3%A9mon_Trading_Card_Game_logo.svg.png' height={80}  width={160} /></Link>
                    <Link to="/juegos/Magic:The Gathering" ><img src='https://1000logos.net/wp-content/uploads/2022/10/Magic-The-Gathering-logo.png' height={80}  width={120} /></Link>
                    <Link to="/juegos/Dragon Ball" ><img src='https://i0.wp.com/pokebank.es/wp-content/uploads/2023/06/648-6485057_logo-dragon-ball-super-tcg-leave-a-comment.png?fit=1352%2C638&ssl=1' height={80}  width={160} /></Link>
            </div>
        </>
    )
}

export default Header