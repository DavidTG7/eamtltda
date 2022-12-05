import "./servicios.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { RiTeamFill } from "react-icons/ri";
import logo from '../../../imagenes/Logo_Editado.png';
import IRiesgos from '../../../imagenes/GestionDeRiesgo.png';
import IAnalisisSeguridad from '../../../imagenes/AnalisisDeSeguridad.png';
import IControlDeAcesso from '../../../imagenes/ControlDeAcesso.png';
import IPoliticas from '../../../imagenes/PoliticasDeSeguridad.png';
import IMonitoreo from '../../../imagenes/MonitoreoDeSeguridad.png';
import IProteccion from '../../../imagenes/Proteccion.png';
import IAuditoria from '../../../imagenes/Auditoria.png';
import IPersonalSeguridad from '../../../imagenes/PersonalSeguridad.png';
import IProcesos from '../../../imagenes/Procesos.png';
import IPortalWeb from '../../../imagenes/PortalesWeb.png';
import IPlaneacion from '../../../imagenes/Planeacion.png';
import IRedes from '../../../imagenes/redes.png';
import IInterventoria from '../../../imagenes/interventoria.png';
import ISistemas from '../../../imagenes/Sistemas.png';
import Button from 'react-bootstrap/Button';

export const Servicios = () => {
  return (
    // <div className="contenedor-servicios-general">
    //   <Tabs
    //   defaultActiveKey="gestion_riesgos"
    //   id="uncontrolled-tab-example"
    //   className="mb-3"
    // >
    //   <Tab className="contenedor-servicios-tabs" eventKey="gestion_riesgos" 
    //     title={
    //       <span className="contenedor-servicios-tabs">
    //         <img
    //             className="contenedor-servicios-tabs-imagen"
    //             src={logo}
    //             alt="Logo"
    //         />
    //         Gestion de Riesgos
    //       </span>
    //       }>
    //     <div>
    //       <ul>
    //         <li>ANÁLISIS DE RIESGOS.</li>
    //         <li>MANTENIMIENTO DE MAPAS DE RIESGOS.</li>
    //         <li>PRUEBAS DE INTRUSION DE SISTEMAS.</li>
    //         <li>MONITOREO DE EVENTOS DE SEGURIDAD.</li>
    //         <li>ADMINISTRACIÓN DE INCIDENTES DE SEGURIDAD.</li>
    //         <li>DISENO DE PROCEDIWENTOS DE SEGURIDAD.</li>
    //       </ul>
    //     </div>
    //   </Tab>
    //   <Tab className="contenedor-servicios-tabs"
    //   eventKey="seguridad" 
    //   title={
    //     <span className="contenedor-servicios-tabs">
    //       <img
    //           className="contenedor-servicios-tabs-imagen"
    //           src={logo}
    //           alt="Logo"
    //       />
    //       Analisis De Seguridad
    //     </span>
    //     }>
    //   <div>
    //       <ul>
    //         <li>GAP DEL ESTADO DE SEGURIDAD.</li>
    //         <li>ANÁLISIS DE MADUREZ DE SEGURIDAD.</li>
    //         <li>DISEÑO DE SOLUCIONES DE SEGURIDAD.</li>
    //       </ul>
    //     </div>
    //   </Tab>
    //   <Tab className="contenedor-servicios-tabs" 
    //   eventKey="Acceso" 
    //   title={
    //     <span className="contenedor-servicios-tabs">
    //       <img
    //           className="contenedor-servicios-tabs-imagen"
    //           src={logo}
    //           alt="Logo"
    //       />
    //       Control de Acceso
    //     </span>
    //     }>
    //   <div>
    //       <ul>
    //         <li>DISEÑO DE MODELO DE CONTROL DE ACCESO.</li>
    //         <li>MONITOREO DE CONTROL DE ACCESO.</li>
    //         <li>AUDITORIA DE CONTROL DE ACCESO.</li>
    //         <li>POLÍTlCAS DE CONTROL DE ACCESO.</li>
    //         <li>ESTÁNDARES DE CONTROL DE ACCESO.</li>
    //       </ul>
    //     </div>
    //   </Tab>
    // </Tabs>
    // </div>
    <div>
      <div className="servicios-contenedor" id="Riesgos">
        <img
          className="servicios-contenedor-img"
          src={IRiesgos}
          alt="Logo"
        />
        <div className="servicios-contenedor-texto" >
          <h3>Gestion de Riesgos</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>Análisis de Riesgos.</li>
            <li>Mantenimiento de mapas de riesgos.</li>
            <li>Pruebas de Intrusion de sistemas</li>
            <li>Monitoreo de eventos de Seguridad</li>
            <li>Administración de incidentes de Seguridad</li>
            <li>Diseño de procedimientos de seguridad</li>
          </ul>
          <Button variant="success">Conoce más</Button>
        </div>
      </div>
      <div className="servicios-contenedor" id="AnalisSeguridad">
        <img
          className="servicios-contenedor-img"
          src={IAnalisisSeguridad}
          alt="Logo"
        />
        <div className="servicios-contenedor-texto" >
          <h3>Análisis de Seguridad</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>Gap del estado de seguridad</li>
            <li>Análisis de madurez de seguridad</li>
            <li>Diseño de Soluciones de seguridad</li>
          </ul>
          <Button variant="success">Conoce más</Button>
        </div>
      </div>
      <div className="servicios-contenedor" id="Control">
        <img
          className="servicios-contenedor-img"
          src={IControlDeAcesso}
          alt="Logo"
        />
        <div className="servicios-contenedor-texto">
          <h3>Control de Acceso</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>Diseño de Modelo de control de acceso</li>
            <li>Monitoreo de control de acceso</li>
            <li>Auditoria de control de acceso</li>
            <li>Políticas de control de acceso</li>
            <li>Estándares de control de acceso</li>
          </ul>
          <Button variant="success">Conoce más</Button>
        </div>
      </div>
      <div className="servicios-contenedor">
        <img
          className="servicios-contenedor-img"
          src={IPoliticas}
          alt="Logo"
        />
        <div className="servicios-contenedor-texto" id="PSeguridad">
          <h3>Políticas de Seguridad</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>Diseño y desarrollo de políticas y estándares de seguridad</li>
            <li>Capacitación en seguridad</li>
            <li>Aplicación de normatividad estatal</li>
          </ul>
          <Button variant="success">Conoce más</Button>
        </div>
      </div>
      <div className="servicios-contenedor" id="ISeguridad">
        <img
          className="servicios-contenedor-img"
          src={IMonitoreo}
          alt="Logo"
        />
        <div className="servicios-contenedor-texto" >
          <h3>Incidentes de Seguridad</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>Apoyo en incidentes de seguridad</li>
            <li>Investigación en incidentes de seguridad</li>
            <li>Monitoreo de incidentes de seguridad</li>
            <li>Administración de incidentes de seguridad</li>
          </ul>
          <Button variant="success">Conoce más</Button>
        </div>
      </div>
      <div className="servicios-contenedor" id="Proteccion">
        <img
          className="servicios-contenedor-img"
          src={IProteccion}
          alt="Logo"
        />
        <div className="servicios-contenedor-texto"  >
          <h3>Protección</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>Diseño e implementación de controles de seguridad</li>
            <li>Monitoreo de controles de seguridad.</li>
          </ul>
          <Button variant="success">Conoce más</Button>
        </div>
      </div>
      <div className="servicios-contenedor" id="Procesos">
        <img
          className="servicios-contenedor-img"
          src={IProcesos}
          alt="Logo"
        />
        <div className="servicios-contenedor-texto" id="ISeguridad">
          <h3>Procesos y Procedimientos</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>Diseño de procesos y procedimientos</li>
            <li>Diseño del mapa de Procesos</li>
            <li>Auditorias de calidad y control</li>
            <li>Diseño e implementación del sistema de gestión de calidad (SGC)</li>
            <li>Diseño de politicas y objetivos de calidad</li>
          </ul>
          <Button variant="success">Conoce más</Button>
        </div>
      </div>
      <div className="servicios-contenedor" id="SGC">
        <img
          className="servicios-contenedor-img"
          src={IAuditoria}
          alt="Logo"
        />
        <div className="servicios-contenedor-texto">
          <h3>SGC.</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>Diseño, implementación y puesta en marcha del sistema de gestión de calidad, de acuerdo a las directrices y políticas de la Norma ISO 9001 versióm 2000.</li>
          </ul>
          <Button variant="success">Conoce más</Button>
        </div>
      </div>
    </div>
  );
};

// Nominacion de clases: BEM Block Element Modifier
