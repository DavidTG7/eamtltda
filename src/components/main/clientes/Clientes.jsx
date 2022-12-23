// import gestionRiesgos from "./images/gestionRiesgos.svg";
// import analisisSeguridad from "./images/analisisSeguridad.svg";
// import controlAcceso from "./images/controlAcceso.svg";
// import politicasSeguridad from "./images/politicasSeguridad.svg";
// import inicidenteSeguridad from "./images/inicidenteSeguridad.svg";
// import proteccion from "./images/proteccion.svg";
// import personalSeguridad from "./images/personalSeguridad.svg";
// import auditoria from "./images/auditoria.svg";
// import procesosProcedimientos from "./images/procesosProcedimientos.svg";
// import sgc from "./images/sgc.svg";
// import auditoriaSistemas from "./images/auditoriaSistemas.svg";
// import software from "./images/software.svg";
// import planeacion from "./images/planeacion.svg";
// import redes from "./images/redes.svg";
// import interventoria from "./images/interventoria.svg";

import Funat from "./images/publico/funat.jpg";
import ACI from "./images/publico/aci.jpg";
import Apeles from "./images/publico/Apeles.png";
import TodoSistemas from "./images/publico/todoSistemas.jpg";
import Management from "./images/publico/management.jpg";
import Sumared from "./images/publico/sumared.jpg";
import Emcarlogo from "./images/publico/Emcarlogo.png";
import world from "./images/publico/world.jpg";
import Ada from "./images/publico/ada.jpg";
import positiva from "./images/publico/positiva.jpg";
import DCCA from "./images/publico/DCCA.jpg";
import seguro_social from "./images/publico/seguro_social.jpg";
import quindio from "./images/publico/quindio.png";
import previsora from "./images/publico/previsora.jpg";
import Cuatro72 from "./images/publico/4-72.png";
import utp from "./images/publico/utp.jpg";
import uniban from "./images/publico/uniban.jpg";
import superintendencia from "./images/publico/superintendencia.jpg";
import CRQ from "./images/publico/CRQ.jpg";
import oleoflores from "./images/publico/oleoflores.jpg";
import mintic from "./images/publico/mintic.jpg";
import anh from "./images/publico/anh.png";
import UBPD from "./images/publico/UBPD.png";




import "./clientes.css";

const clientes = [
  {
    nombre: "Funat",
    link: "Riesgos",
    imagen: Funat,
  },
  {
    nombre: "A.C.I Proyectos S.A.S",
    link: "Riesgos",
    imagen: ACI,
  },  
  {
    nombre: "Papeles Inteligentes",
    link: "Riesgos",
    imagen: Apeles,
  },
  {
    nombre: "Todo Sistemas STI",
    link: "Riesgos",
    imagen: TodoSistemas,
  },  {
    nombre: "Management Quality",
    link: "Riesgos",
    imagen: Management,
  },
  {
    nombre: "SumaRed Todos Juntos",
    link: "Riesgos",
    imagen: Sumared,
  },  
  {
    nombre: "Emcartago",
    link: "Riesgos",
    imagen: Emcarlogo,
  },
  {
    nombre: "World Council of credit Unions",
    link: "Riesgos",
    imagen: world,
  },  {
    nombre: "Ada 29",
    link: "Riesgos",
    imagen: Ada,
  },
  {
    nombre: "Positiva",
    link: "Riesgos",
    imagen: positiva,
  },  
  {
    nombre: "DCCA",
    link: "Riesgos",
    imagen: DCCA,
  },
  {
    nombre: "Seguro Social",
    link: "Riesgos",
    imagen: seguro_social,
  },
  {
    nombre: "Loteria Quindio",
    link: "Riesgos",
    imagen: quindio,
  },
  {
    nombre: "Previsora",
    link: "Riesgos",
    imagen: previsora,
  },
  {
    nombre: "4-72",
    link: "Riesgos",
    imagen: Cuatro72,
  },
  {
    nombre: "Universidad Tecnológica de Pereira",
    link: "Riesgos",
    imagen: utp,
  },
  {
    nombre: "Uniban",
    link: "Riesgos",
    imagen: uniban,
  },
  {
    nombre: "Superintendencia de Sociedades",
    link: "Riesgos",
    imagen: superintendencia,
  },
  {
    nombre: "Corporación Autónoma Reginonal del Quindio",
    link: "Riesgos",
    imagen: CRQ,
  },
  {
    nombre: "Gestión de Riesgos",
    link: "Riesgos",
    imagen: oleoflores,
  },
  {
    nombre: "Gestión de Riesgos",
    link: "Riesgos",
    imagen: mintic,
  },
  {
    nombre: "Gestión de Riesgos",
    link: "Riesgos",
    imagen: anh,
  },
  {
    nombre: "Gestión de Riesgos",
    link: "Riesgos",
    imagen: UBPD,
  },
];

const todosLosClientes_sectorPublico = clientes.map(({ nombre, link , imagen }) => {
  return (
    <div id="cliente-caja" className="sectorPublico" key={nombre}>
      <img className="cliente-icono" src={imagen} alt={nombre} />
      {/* <p>{nombre}</p> */}
    </div>
  );
});

export const Clientes = () => {
  return (
    <section id="Clientes">
      <h3>Clientes</h3>
      
      <div id="servicios-grid">{todosLosClientes_sectorPublico}</div>

      <div class="servicios__control">
        <div id="todos" class="cliente__boton control_con_active"><i class="fas fa-light fa-border-all"></i>Sector Público</div>
        <div id="beneficio" class="cliente__boton"><i class="fas fa-thin fa-circle-check"></i>Sector Coorperativo Solidario</div>
        <div id="exequial" class="cliente__boton"><i class="fas fa-solid fa-cross"></i>Sector Financiero</div>
        <div id="financiero" class="cliente__boton"><i class="fas fa-thin fa-money-bill"></i>Fondo de Empleados</div>
      </div>

    </section>
  );
};
