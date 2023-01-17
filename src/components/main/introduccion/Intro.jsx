import "./intro.css";
import Carousel from "react-bootstrap/Carousel";
import fondo1 from "../../../imagenes/empresario.png";
import fondo2 from "../../../imagenes/clientes_felices.png";
import logo from "../../../imagenes/Logo_Editado.png";

export const Intro = () => {
  return (
    <div className="intro-carousel">
      <h1 className="eamtTitleH1-hidden">EAMT LTDA</h1>
      <Carousel variant="dark">
        <Carousel.Item interval={4000}>
          <div className="intro-contenedor">
            <div className="intro-contenedor-informacion">
              <img
                className="intro-carrusel-contenido-imagen"
                src={logo}
                alt="Logo-slider1"
              />
              <p>
                Es una empresa colombiana con 25 años de experiencia en
                Consultoría y Asesoría que apoya las organizaciones en la
                auditoria de procesos, detección de riesgos, diseño de
                estrategias, ejecución de planes de acción y apoya las
                iniciativas de documentación, implementación y automatización de
                Procesos de Negocios.
              </p>
            </div>
            <div className="intro-contenedor-imagen">
              <img
                className="d-block w-100 intro-carrusel-imagen"
                src={fondo1}
                alt="fotoSlider1"
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
                alt="Logo-slider2"
              />
              <p>
                Ponemos al servicio de nuestros aliados estratégicos la
                experiencia adquirida en la participación de proyectos en el
                sector público y privado, bajo la metodología de Auditoria,
                Riesgos, Calidad y BPM para la gestión de procesos y flujos de
                trabajo, contribuyendo en el aumento de la eficiencia, eficacia,
                el rendimiento y la agilidad de las operaciones diarias en las
                organizaciones.
              </p>
            </div>
            <div className="intro-contenedor-imagen">
              <img
                className="d-block w-100 intro-carrusel-imagen"
                src={fondo2}
                alt="fotoSlider2"
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

// Nominacion de clases: BEM Block Element Modifier
