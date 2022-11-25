import "./intro.css";
import Carousel from 'react-bootstrap/Carousel';
import fondo1 from '../../../imagenes/Fondo_login2.png';
import fondo2 from '../../../imagenes/principios2.jpg';
import fondo3 from '../../../imagenes/valores.jpg';


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
            <h3>Somos una empresa...</h3>
            <p>Podemos ofrecerte</p>
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
      </Carousel>
    </div>
  );
};

// Nominacion de clases: BEM Block Element Modifier
