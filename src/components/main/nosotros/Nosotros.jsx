import "./nosotros.css";
import { FaBuilding,FaNetworkWired } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { BiUserCheck } from "react-icons/bi";
import { CgAwards,CgDanger } from "react-icons/cg";
import { MdWhereToVote,MdSecurity,MdDangerous,MdAdminPanelSettings} from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { VscSourceControl,VscSettingsGear } from "react-icons/vsc";
import { ImBooks } from "react-icons/im";
import { AiOutlineFileProtect } from "react-icons/ai";
import { FcProcess } from "react-icons/fc";
import { SiWebmoney } from "react-icons/si";

export const Nosotros = () => {
  return (
    <div className="nosotros-container-general">
      {/* <img className="nosotros-container-general-img" src={logo} alt="logo"></img> */}
      <div className="nosotros-container-compañia">
        <h2>Servicios</h2>
        <div className="nosotros-container">
          <a href="#Riesgos" className="nosotros-container-item">
              <CgDanger className="nosotros-container-item-icons"/>
              <p>Gestion de Riesgos</p>
          </a>
          <a href="#AnalisSeguridad" className="nosotros-container-item">
              <MdSecurity className="nosotros-container-item-icons"/>
              <p>Analisis de Seguridad</p>
          </a>
          <a href="#Control" className="nosotros-container-item">
              <VscSourceControl className="nosotros-container-item-icons"/>
              <p>Control de Acesso</p>
          </a>
          <a href="#PSeguridad" className="nosotros-container-item">
              <ImBooks className="nosotros-container-item-icons"/>
              <p>Politicas de Seguridad</p>
          </a>
          <a href="#ISeguridad" className="nosotros-container-item">
              <MdDangerous className="nosotros-container-item-icons"/>
              <p>Incidentes de Seguridad</p>
          </a>
          <a href="#Proteccion" className="nosotros-container-item">
              <AiOutlineFileProtect className="nosotros-container-item-icons" />
              <p>Protección </p>
          </a>
          <a href="#" className="nosotros-container-item">
              <RiTeamFill className="nosotros-container-item-icons" />
              <p>Personal de Seguridad </p>
          </a>
          <a href="#" className="nosotros-container-item">
              <RiTeamFill className="nosotros-container-item-icons" />
              <p>Auditoria </p>
          </a>
          <a href="#Procesos" className="nosotros-container-item">
              <FcProcess className="nosotros-container-item-icons" />
              <p>Procesos y Procedimientos </p>
          </a>
          <a href="#SGC" className="nosotros-container-item">
              <VscSettingsGear className="nosotros-container-item-icons" />
              <p>SGC</p>
          </a>
          <a href="#" className="nosotros-container-item">
              <RiTeamFill className="nosotros-container-item-icons" />
              <p>Auditoria de Sistemas</p>
          </a>
          <a href="#" className="nosotros-container-item">
              <SiWebmoney className="nosotros-container-item-icons" />
              <p>Sotfware y Portal Web</p>
          </a>
          <a href="#" className="nosotros-container-item">
              <RiTeamFill className="nosotros-container-item-icons" />
              <p>Planeación</p>
          </a>
          <a href="#" className="nosotros-container-item">
              <RiTeamFill className="nosotros-container-item-icons" />
              <p>Redes</p>
          </a>
          <a href="#" className="nosotros-container-item">
              <RiTeamFill className="nosotros-container-item-icons" />
              <p>Interventoria</p>
          </a>
          <a href="#" className="nosotros-container-item">
              <MdAdminPanelSettings className="nosotros-container-item-icons" />
              <p>Administración de Sistemas</p>
          </a>
        </div>
      </div>
    </div>
  );
};

// Nominacion de clases: BEM Block Element Modifier
