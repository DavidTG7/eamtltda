import "./intro.css";
import Carousel from 'react-bootstrap/Carousel';
import fondo1 from '../../../imagenes/Fondo_login2.png';
import fondo2 from '../../../imagenes/principios2.jpg';
import fondo3 from '../../../imagenes/valores.jpg';
import logo from '../../../imagenes/Logo_Editado.png';


export const Intro = () => {
  return (
    <div>
      <Carousel variant="dark">
        {/* //Inicio del Item     */}
        <Carousel.Item className="intro-carrusel-elemento">
          <img
            className="d-block w-100 intro-carrusel-imagen"
            src={fondo1}
            alt="First slide"
          />
          <Carousel.Caption>
            <img
              className="intro-carrusel-contenido-imagen"
              src={logo}
              alt="Logo"
            />
            <p>EAMT LTDA. es una empresa colombiana con 25 años de experiencia en Consultoría y Asesoría que apoya las organizaciones en la auditoria de procesos, detección de riesgos, diseño de estrategias, ejecución de planes de acción y apoya las iniciativas de documentación, implementación y automatización de Procesos de Negocios. </p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* //Fin de un item */}
        <Carousel.Item>
          <img
            className="d-block w-100 intro-carrusel-imagen"
            src= {fondo2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 intro-carrusel-imagen"
            src={fondo3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="intro-contenedor">
            <div className="intro-contenedor-informacion">
              <img
                className="intro-carrusel-contenido-imagen"
                src={logo}
                alt="Logo"
              />
              <p>EAMT LTDA. es una empresa colombiana con 25 años de experiencia en Consultoría y Asesoría que apoya las organizaciones en la auditoria de procesos, detección de riesgos, diseño de estrategias, ejecución de planes de acción y apoya las iniciativas de documentación, implementación y automatización de Procesos de Negocios. </p>
            </div>
            <div className="intro-contenedor-imagen">
              <img
              src={fondo3}
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

// Nominacion de clases: BEM Block Element Modifier
