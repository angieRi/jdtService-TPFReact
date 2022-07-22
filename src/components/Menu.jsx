import React from "react";
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
import {Link} from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Menu() {

    return (
        <>
            <AuthContext>
                {
                    context=>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">JDT-ONLINE</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
                        {
                            context.isLogin &&
                            <>
                                <NavDropdown title="Servicios" id="collasible-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/producto/lista">Lista de Productos</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/producto/crear">Nuevo Producto</NavDropdown.Item>

                                </NavDropdown>
                            </>
                        }

                    </Nav>
                    <Nav>
                        {
                            !context.isLogin &&
                            <>
                                <Nav.Link as={Link} to="/registrar">Registro</Nav.Link>
                                <Nav.Link as={Link} to="/ingresar">Ingresar</Nav.Link>
                            </>
                        }
                        {
                            context.isLogin &&
                            <>
                                <Nav.Link >Hola! </Nav.Link>
                                <Nav.Link onClick={context.logoutUser}>Salir</Nav.Link>
                            </>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
                }
            </AuthContext>
        </>
    )
}
export default Menu;