import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home" style={{ fontWeight: "bold" }}>
            EAMLTADA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Empresa" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Misión</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Visión</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Políticas de Calidad
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Objetivos de Calidad
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">¿Quiénes somos?</Nav.Link>
              <Nav.Link href="#link">Servicios</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
