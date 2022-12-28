import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.css";

export const Header = () => {
  return (
    <header>
      <Navbar
        id="header"
        collapseOnSelect="true"
        bg="dark"
        variant="dark"
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home" style={{ fontWeight: "bold" }}>
            EAMLTADA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Empresa" id="basic-nav-dropdown">
                <NavDropdown.Item href="#mision">Misión</NavDropdown.Item>
                <NavDropdown.Item href="#vision">Visión</NavDropdown.Item>
                <NavDropdown.Item href="#politicas-calidad">
                  Políticas de Calidad
                </NavDropdown.Item>
                <NavDropdown.Item href="#objetivos-calidad">
                  Objetivos de Calidad
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#nosotros">Servicios</Nav.Link>
              <Nav.Link href="#Clientes">Nuestros Clientes</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
