import "./servicios.css";
import IRiesgos from "./image/GestionDeRiesgo.png";
import IAnalisisSeguridad from "./image/AnalisisDeSeguridad.png";
import IControlDeAcesso from "./image/ControlDeAcesso.png";
import IPoliticas from "./image/PoliticasDeSeguridad.png";
import IMonitoreo from "./image/MonitoreoDeSeguridad.png";
import IProteccion from "./image/Proteccion.png";
import IPersonalSeguridad from "./image/PersonalSeguridad.png";
import IAuditoria from "./image/Auditoria.png";
import IProcesos from "./image/Procesos.png";
import IPortalWeb from "./image/PortalesWeb.png";
import IPlaneacion from "./image/Planeacion.png";
import IRedes from "./image/redes.png";
import IInterventoria from "./image/interventoria.png";
import ISistemas from "./image/Sistemas.png";
import Button from "react-bootstrap/Button";

import { LineDivisor } from "./servicios.styled";

export const Servicios = () => {
  return (
    <div>
      <div className="servicios-contenedor" id="Riesgos">
        <img className="servicios-contenedor-img" src={IRiesgos} alt="Logo" />
        <div className="servicios-contenedor-texto">
          <h3>Gestion de Riesgos</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>Análisis de Riesgos.</li>
            <li>Mantenimiento de mapas de riesgos.</li>
            <li>Pruebas de Intrusion de sistemas</li>
            <li>Monitoreo de eventos de Seguridad</li>
            <li>Administración de incidentes de Seguridad</li>
            <li>Diseño de procedimientos de seguridad</li>
          </ul>
          <LineDivisor color="rgba(29, 250, 0, 1)" />
          {/* <Button variant="success">Conoce más</Button> */}
        </div>
      </div>
      <div className="servicios-contenedor invertido" id="AnalisSeguridad">
        <div className="servicios-contenedor-texto">
          <h3>Análisis de Seguridad</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>Gap del estado de seguridad</li>
            <li>Análisis de madurez de seguridad</li>
            <li>Diseño de Soluciones de seguridad</li>
          </ul>
          <LineDivisor color="rgba(222, 25, 0, 0.8)" />
          <LineDivisor color="rgba(222, 25, 0, 0.8)" />
          {/* <Button variant="success">Conoce más</Button> */}
        </div>
        <img
          className="servicios-contenedor-img"
          src={IAnalisisSeguridad}
          alt="Logo"
        />
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
          <LineDivisor color="rgba(189, 25, 230, 0.8)" />
          {/* <Button variant="success">Conoce más</Button> */}
        </div>
      </div>
      <div className="servicios-contenedor invertido">
        <div className="servicios-contenedor-texto" id="PSeguridad">
          <h3>Políticas de Seguridad</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>Diseño y desarrollo de políticas y estándares de seguridad</li>
            <li>Capacitación en seguridad</li>
            <li>Aplicación de normatividad estatal</li>
          </ul>
          <LineDivisor color="rgba(20, 234, 209, 0.8)" />
          {/* <Button variant="success">Conoce más</Button> */}
        </div>
        <img className="servicios-contenedor-img" src={IPoliticas} alt="Logo" />
      </div>
      <div className="servicios-contenedor" id="ISeguridad">
        <img className="servicios-contenedor-img" src={IMonitoreo} alt="Logo" />
        <div className="servicios-contenedor-texto">
          <h3>Incidentes de Seguridad</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>Apoyo en incidentes de seguridad</li>
            <li>Investigación en incidentes de seguridad</li>
            <li>Monitoreo de incidentes de seguridad</li>
            <li>Administración de incidentes de seguridad</li>
          </ul>
          <LineDivisor color="rgba(226, 16, 18, 0.8)" />
          <LineDivisor color="rgba(226, 16, 18, 0.8)" />
          {/* <Button variant="success">Conoce más</Button> */}
        </div>
      </div>
      <div className="servicios-contenedor invertido " id="Proteccion">
        <div className="servicios-contenedor-texto">
          <h3>Protección</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>Diseño e implementación de controles de seguridad</li>
            <li>Monitoreo de controles de seguridad.</li>
          </ul>
          <LineDivisor color="rgba(229, 153, 39, 0.8)" />
          {/* <Button variant="success">Conoce más</Button> */}
        </div>
        <img
          className="servicios-contenedor-img"
          src={IProteccion}
          alt="Logo"
        />
      </div>
      <div className="servicios-contenedor" id="PerSeguridad">
        <img
          className="servicios-contenedor-img"
          src={IPersonalSeguridad}
          alt="Logo"
        />
        <div className="servicios-contenedor-texto">
          <h3>Personal de Seguridad</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>
              Recurso Especializado en Seguridad Informática de acuerdo a las
              directrices de las normas ISO 17799 - 27001 - 27002 (SGSI)
            </li>
          </ul>
          <LineDivisor color="rgba(57, 210, 19, 0.8)" />
          <LineDivisor color="rgba(57, 210, 19, 0.8)" />
          {/* <Button variant="success">Conoce más</Button> */}
        </div>
      </div>
      <div className="servicios-contenedor invertido" id="Auditoria">
        <div className="servicios-contenedor-texto">
          <h3>Auditoria</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>Auditoria de cumplimiento de Seguridad</li>
            <li>Auditoria a los sistemas de información</li>
            <li>Auditoria en la aplicación de controles</li>
          </ul>
          <LineDivisor color="rgba(50, 225, 216, 0.8)" />
          {/* <Button variant="success">Conoce más</Button> */}
        </div>
        <img className="servicios-contenedor-img" src={IAuditoria} alt="Logo" />
      </div>
      <div className="servicios-contenedor" id="Procesos">
        <img className="servicios-contenedor-img" src={IProcesos} alt="Logo" />
        <div className="servicios-contenedor-texto">
          <h3>Procesos y Procedimientos</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>Diseño de procesos y procedimientos</li>
            <li>Diseño del mapa de Procesos</li>
            <li>Auditorias de calidad y control</li>
            <li>
              Diseño e implementación del sistema de gestión de calidad (SGC)
            </li>
            <li>Diseño de politicas y objetivos de calidad</li>
          </ul>
          <LineDivisor color="rgba(50, 225, 216, 0.8)" />
          {/* <Button variant="success">Conoce más</Button> */}
        </div>
      </div>
      <div className="servicios-contenedor invertido" id="SGC">
        <div className="servicios-contenedor-texto">
          <h3>SGC.</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>
              Diseño, implementación y puesta en marcha del sistema de gestión
              de calidad, de acuerdo a las directrices y políticas de la Norma
              ISO 9001 versióm 2000.
            </li>
          </ul>
          <LineDivisor color="rgba(241, 222, 36, 0.8)" />
          {/* <Button variant="success">Conoce más</Button> */}
        </div>
        <img className="servicios-contenedor-img" src={IMonitoreo} alt="Logo" />
      </div>
      <div className="servicios-contenedor" id="AuditoriaSistemas">
        <img className="servicios-contenedor-img" src={IAuditoria} alt="Logo" />
        <div className="servicios-contenedor-texto">
          <h3>Auditoria de Sistemas</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>
              Recurso humano especializado en auditoria de sistemas y aplicacion
              de estándares internacionales a los sistemas de información de
              acuerdo a los modelos COBIT-COSO-MECI.
            </li>
          </ul>
          <LineDivisor color="rgba(160, 233, 45, 0.8)" />
          {/* <Button variant="success">Conoce más</Button> */}
        </div>
      </div>
      <div className="servicios-contenedor invertido" id="SoftwareWeb">
        <div className="servicios-contenedor-texto">
          <h3>Software y Portales Web</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>
              Desarrollo y puesta en marcha de aplicaciones especializadas y
              especificas para su empresa
            </li>
            <li>Creación de portales corporativos y sistemas de información</li>
          </ul>
          <LineDivisor color="rgba(111, 90, 238, 0.8)" />
          {/* <Button variant="success">Conoce más</Button> */}
        </div>
        <img className="servicios-contenedor-img" src={IPortalWeb} alt="Logo" />
      </div>
      <div className="servicios-contenedor" id="Planeacion">
        <img
          className="servicios-contenedor-img"
          src={IPlaneacion}
          alt="Logo"
        />
        <div className="servicios-contenedor-texto">
          <h3>Planeación</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>
              Análisis, planeación y diseño de esquemas de contingencia,
              respaldo y recuperación a nivel de los datos dando continuidad al
              negocio
            </li>
          </ul>
          <LineDivisor color="rgba(160, 233, 45, 0.8)" />
          {/* <Button variant="success">Conoce más</Button> */}
        </div>
      </div>
      <div className="servicios-contenedor invertido" id="Redes">
        <div className="servicios-contenedor-texto">
          <h3>Redes</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>
              Diseño e implementación de redes alambricas e inalámbricas para la
              conexión y administración de recursos empresariales
            </li>
          </ul>
          <LineDivisor color="rgba(189, 25, 230, 0.8)" />
          {/* <Button variant="success">Conoce más</Button> */}
        </div>
        <img className="servicios-contenedor-img" src={IRedes} alt="Logo" />
      </div>
      <div className="servicios-contenedor" id="Interventoria">
        <img
          className="servicios-contenedor-img"
          src={IInterventoria}
          alt="Logo"
        />
        <div className="servicios-contenedor-texto">
          <h3>Interventoria</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>Reingenería en platafomas tecnológicas</li>
            <li>Data center</li>
            <li>Esquemas de comunicaciones y seguridad informática</li>
            <li>Aplicativos en producción</li>
          </ul>
          <LineDivisor color="rgba(20, 234, 209, 0.8)" />
          {/* <Button variant="success">Conoce más</Button>  */}
        </div>
      </div>
      <div className="servicios-contenedor invertido" id="AdmiSistemas">
        <div className="servicios-contenedor-texto">
          <h3>Administración de Sistemas</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>
              Configuración de servidores: DNS, PROXY, FIREWALL, CORREO,
              TERMINAL SERVICE, VPN y de aplicación de base de datos
            </li>
            <li>
              Admnistración, diseño y creación de planes de mantenimiento para
              vases de datos
            </li>
          </ul>
          <LineDivisor color="rgba(189, 25, 230, 0.8)" />
          {/* <Button variant="success">Conoce más</Button> */}
        </div>
        <img className="servicios-contenedor-img" src={ISistemas} alt="Logo" />
      </div>
    </div>
  );
};

// Nominacion de clases: BEM Block Element Modifier
