import "./nosotros.css";
import { FaHeart } from "react-icons/fa";
import logo from '../../../imagenes/Logo_Editado.png';

export const Nosotros = () => {
  return (
    <div className="nosotros-container-general">
      {/* <img className="nosotros-container-general-img" src={logo} alt="logo"></img> */}
      <div className="nosotros-container-compañia">
        <h2>Compañia</h2>
        <div className="nosotros-container">
          <div className="nosotros-container-item">
              <FaHeart className="nosotros-container-img"/>
              <p>Nosotros</p>
          </div>
          <div className="nosotros-container-item">
              <FaHeart className="nosotros-container-img"/>
              <p>Trayectoria</p>
          </div>
          <div className="nosotros-container-item">
              <FaHeart className="nosotros-container-img"/>
              <p>Clientes</p>
          </div>
          <div className="nosotros-container-item">
              <FaHeart className="nosotros-container-img"/>
              <p>Donde estamos</p>
          </div>
          <div className="nosotros-container-item">
              <FaHeart className="nosotros-container-img"/>
              <p>Donde estamos</p>
          </div>
          <div className="nosotros-container-item">
              <FaHeart className="nosotros-container-img"/>
              <p>Donde estamos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Nominacion de clases: BEM Block Element Modifier
