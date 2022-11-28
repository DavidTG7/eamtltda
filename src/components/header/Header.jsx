import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" style={headerStyle}>
        <Container>
          <Navbar.Brand href="#home" style={{ fontWeight: "bold" }}>
            EAMLTADA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#quienes-somos">¿Quiénes somos?</Nav.Link>
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
              <Nav.Link href="#link">Servicios</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

const headerStyle = {
  marginTop: "30px",
  borderTopRightRadius: "10px",
  borderTopLeftRadius: "10px",
};
