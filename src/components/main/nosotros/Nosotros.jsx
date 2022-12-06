// import "./nosotros.css";
// import { } from "react-icons/fa";
// import {  } from "react-icons/bi";
// import {  } from "react-icons/cg";
// import { MdSecurity,MdDangerous,MdAdminPanelSettings} from "react-icons/md";
// import { RiTeamFill } from "react-icons/ri";
// import { VscSourceControl,VscSettingsGear } from "react-icons/vsc";
// import { ImBooks } from "react-icons/im";
// import { AiOutlineFileProtect } from "react-icons/ai";
// import { FcProcess } from "react-icons/fc";
// import { SiWebmoney } from "react-icons/si";

// import danger from './image/danger.svg';
// import seguridad from './image/seguridad.png';
// import procesos from './image/procesos.png';
// import sistemas from './image/sistemas.png';
// import plan from './image/plan.png';
// import auditoria from './image/auditoria.png';
// import auditoria_sistemas from './image/auditoria_sistemas.png';
// import redes from './image/redes.png';
// import interventoria from './image/interventoria.png';
// import administracion from './image/administracion.png';

// export const Nosotros = () => {
//   return (
//     <div className="nosotros-container-general" id="servicios">
//       {/* <img className="nosotros-container-general-img" src={logo} alt="logo"></img> */}
//       <div className="nosotros-container-compañia">
//         <h2 className="gcSeIN">Servicios</h2>
//         <div className="nosotros-container">
//           <a href="#Riesgos" className="nosotros-container-item">
//               <img
//                 src={danger}
//                 alt="Gestion de Riesgos"
//                 className="nosotros-container-item-icons"/>
//             <p>Gestion de Riesgos</p>
//           </a>
//           <a href="#AnalisSeguridad" className="nosotros-container-item">
//               <MdSecurity className="nosotros-container-item-icons"/>
//               <p>Analisis de Seguridad</p>
//           </a>
//           <a href="#Control" className="nosotros-container-item">
//               <VscSourceControl className="nosotros-container-item-icons"/>
//               <p>Control de Acesso</p>
//           </a>
//           <a href="#PSeguridad" className="nosotros-container-item">
//               <ImBooks className="nosotros-container-item-icons"/>
//               <p>Politicas de Seguridad</p>
//           </a>
//           <a href="#ISeguridad" className="nosotros-container-item">
//               <MdDangerous className="nosotros-container-item-icons"/>
//               <p>Incidentes de Seguridad</p>
//           </a>
//           <a href="#Proteccion" className="nosotros-container-item">
//               <AiOutlineFileProtect className="nosotros-container-item-icons" />
//               <p>Protección </p>
//           </a>
//           <a href="#PerSeguridad" className="nosotros-container-item">
//           <img
//                 src={seguridad}
//                 alt="Gestion de Riesgos"
//                 className="nosotros-container-item-icons"/>
//               <p>Personal de Seguridad </p>
//           </a>
//           <a href="#Auditoria" className="nosotros-container-item">
//           <img
//                 src={auditoria}
//                 alt="Gestion de Riesgos"
//                 className="nosotros-container-item-icons"/>
//               <p>Auditoria </p>
//           </a>
//           <a href="#Procesos" className="nosotros-container-item">
//           <img
//                 src={procesos}
//                 alt="Gestion de Riesgos"
//                 className="nosotros-container-item-icons"/>
//               <p>Procesos y Procedimientos </p>
//           </a>
//           <a href="#SGC" className="nosotros-container-item">
//           <img
//                 src={sistemas}
//                 alt="Gestion de Riesgos"
//                 className="nosotros-container-item-icons"/>
//               <p>SGC</p>
//           </a>
//           <a href="#AuditoriaSistemas" className="nosotros-container-item">
//           <img
//                 src={auditoria_sistemas}
//                 alt="Gestion de Riesgos"
//                 className="nosotros-container-item-icons"/>
//               <p>Auditoria de Sistemas</p>
//           </a>
//           <a href="#SoftwareWeb" className="nosotros-container-item">
//               <SiWebmoney className="nosotros-container-item-icons" />
//               <p>Sotfware y Portal Web</p>
//           </a>
//           <a href="#Planeacion" className="nosotros-container-item">
//           <img
//                 src={plan}
//                 alt="Gestion de Riesgos"
//                 className="nosotros-container-item-icons"/>
//               <p>Planeación</p>
//           </a>
//           <a href="#Redes" className="nosotros-container-item">
//           <img
//                 src={redes}
//                 alt="Gestion de Riesgos"
//                 className="nosotros-container-item-icons"/>
//               <p>Redes</p>
//           </a>
//           <a href="#Interventoria" className="nosotros-container-item">
//           <img
//                 src={interventoria}
//                 alt="Gestion de Riesgos"
//                 className="nosotros-container-item-icons"/>
//               <p>Interventoria</p>
//           </a>
//           <a href="#AdmiSistemas" className="nosotros-container-item">
//           <img
//                 src={administracion}
//                 alt="Gestion de Riesgos"
//                 className="nosotros-container-item-icons"/>
//               <p>Administración de Sistemas</p>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Nominacion de clases: BEM Block Element Modifier

import gestionRiesgos from "./images/gestionRiesgos.svg";
import analisisSeguridad from "./images/analisisSeguridad.svg";
import controlAcceso from "./images/controlAcceso.svg";
import politicasSeguridad from "./images/politicasSeguridad.svg";
import inicidenteSeguridad from "./images/inicidenteSeguridad.svg";
import proteccion from "./images/proteccion.svg";
import personalSeguridad from "./images/personalSeguridad.svg";
import auditoria from "./images/auditoria.svg";
import procesosProcedimientos from "./images/procesosProcedimientos.svg";
import sgc from "./images/sgc.svg";
import auditoriaSistemas from "./images/auditoriaSistemas.svg";
import software from "./images/software.svg";
import planeacion from "./images/planeacion.svg";
import redes from "./images/redes.svg";
import interventoria from "./images/interventoria.svg";
import "./nosotros.css";

const servicios = [
  {
    nombre: "Gestión de Riesgos",
    imagen: gestionRiesgos,
  },
  {
    nombre: "Análisis de Seguridad",
    imagen: analisisSeguridad,
  },
  {
    nombre: "Conctrol de Acceso",
    imagen: controlAcceso,
  },
  {
    nombre: "Políticas de Seguridad",
    imagen: politicasSeguridad,
  },
  {
    nombre: "Incidentes de Seguridad",
    imagen: inicidenteSeguridad,
  },
  {
    nombre: "Protección",
    imagen: proteccion,
  },
  {
    nombre: "Personal de Seguridad",
    imagen: personalSeguridad,
  },
  {
    nombre: "Auditoria",
    imagen: auditoria,
  },
  {
    nombre: "Procesos y Procedimientos",
    imagen: procesosProcedimientos,
  },
  {
    nombre: "SGC",
    imagen: sgc,
  },
  {
    nombre: "Auditoria de Sistemas",
    imagen: auditoriaSistemas,
  },
  {
    nombre: "Software y Portales Web",
    imagen: software,
  },
  {
    nombre: "Planeación",
    imagen: planeacion,
  },
  {
    nombre: "Redes",
    imagen: redes,
  },
  {
    nombre: "Interventoria",
    imagen: interventoria,
  },
];

const todosLosServicios = servicios.map(({ nombre, imagen }) => {
  return (
    <a href={`#${nombre}`} id="servicio-caja" key={nombre}>
      <img className="servicio-icono" src={imagen} alt={nombre} />
      <p>{nombre}</p>
    </a>
  );
});

export const Nosotros = () => {
  return (
    <section id="nosotros">
      <h3>SERVICIOS</h3>
      <div id="servicios-grid">{todosLosServicios}</div>
    </section>
  );
};
