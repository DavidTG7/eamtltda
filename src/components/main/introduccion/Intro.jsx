import "./intro.css";
import Carousel from "react-bootstrap/Carousel";
import fondo1 from "../../../imagenes/Fondo_login2.png";
import fondo2 from "../../../imagenes/clientes_felices.png";
import fondo3 from "../../../imagenes/empresario.png";
import logo from "../../../imagenes/Logo_Editado.png";

export const Intro = () => {
  return (
    <div className="intro-carousel">
      <Carousel variant="dark">
        {/* //Inicio del Item     */}
        {/* <Carousel.Item className="intro-carrusel-elemento">
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
        </Carousel.Item> */}
        {/* //Fin de un item */}
        <Carousel.Item interval={4000}>
          <div className="intro-contenedor">
            <div className="intro-contenedor-informacion">
              <img
                className="intro-carrusel-contenido-imagen"
                src={logo}
                alt="Logo"
              />
              <p className="intro-carrusel-contenido-texto">
                {/* <h3>EAMT LTDA</h3> */}
                Es una empresa colombiana con 25 años de experiencia en
                Consultoría y Asesoría que apoya las organizaciones en la
                auditoria de procesos, detección de riesgos, diseño de
                estrategias, ejecución de planes de acción y apoya las
                iniciativas de documentación, implementación y automatización de
                Procesos de Negocios.{" "}
              </p>
            </div>
            <div className="intro-contenedor-imagen">
              <img
                className="d-block w-100 intro-carrusel-imagen"
                src={fondo3}
                alt="Third slide"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <div className="intro-contenedor">
            <div className="intro-contenedor-informacion">
              <img
                className="intro-carrusel-contenido-imagen"
                src={logo}
                alt="Logo"
              />
              <p className="intro-carrusel-contenido-texto">
                Ponemos al servicio de nuestros aliados estratégicos la
                experiencia adquirida en la participación de proyectos en el
                sector público y privado, bajo la metodología de Auditoria,
                Riesgos, Calidad y BPM para la gestión de procesos y flujos de
                trabajo, contribuyendo en el aumento de la eficiencia, eficacia,
                el rendimiento y la agilidad de las operaciones diarias en las
                organizaciones.{" "}
              </p>
            </div>
            <div className="intro-contenedor-imagen">
              <img
                className="d-block w-100 intro-carrusel-imagen"
                src={fondo2}
                alt="Third slide"
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

// Nominacion de clases: BEM Block Element Modifier
