import "./nosotros.css";
import { FaBuilding } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { BiUserCheck } from "react-icons/bi";
import { CgAwards } from "react-icons/cg";
import { MdWhereToVote } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";



export const Nosotros = () => {
  return (
    <div className="nosotros-container-general">
      {/* <img className="nosotros-container-general-img" src={logo} alt="logo"></img> */}
      <div className="nosotros-container-compañia">
        <h2>Compañia</h2>
        <div className="nosotros-container">
          <a href="#" className="nosotros-container-item">
              <FaBuilding className="nosotros-container-item-icons"/>
              <p>Nosotros</p>
          </a>
          <a href="#" className="nosotros-container-item">
              <GiNetworkBars className="nosotros-container-item-icons"/>
              <p>Trayectoria</p>
          </a>
          <a href="#" className="nosotros-container-item">
              <BiUserCheck className="nosotros-container-item-icons"/>
              <p>Clientes</p>
          </a>
          <a href="#" className="nosotros-container-item">
              <CgAwards className="nosotros-container-item-icons"/>
              <p>Reconocimientos y Premios</p>
          </a>
          <a href="#" className="nosotros-container-item">
              <MdWhereToVote className="nosotros-container-item-icons"/>
              <p>Donde estamos</p>
          </a>
          <a href="#" className="nosotros-container-item">
              <RiTeamFill className="nosotros-container-item-icons" />
              <p>Nuestro Equipo</p>
          </a>
        </div>
      </div>
    </div>
  );
};

// Nominacion de clases: BEM Block Element Modifier
