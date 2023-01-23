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
import ICiber from "./image/Ciberseguridad.png";
import ITI from "./image/TI.png";


import { LineDivisor } from "./servicios.styled";

export const Servicios = () => {
  return (
    <div className="contenedor-servicios-general">
      <div className="servicios-contenedor" id="Riesgos">
        <img
          className="servicios-contenedor-img"
          src={IRiesgos}
          alt="riesgosImg"
        />
        <div className="servicios-contenedor-texto">
          <h3>Gestión de Riesgos</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>Análisis de Riesgos.</li>
            <li>Mantenimiento de mapas de riesgos.</li>
            <li>Pruebas de intrusión de sistemas.</li>
            <li>Monitoreo de eventos de seguridad.</li>
            <li>Administración de incidentes de seguridad.</li>
            <li>Diseño de procedimientos de seguridad.</li>
          </ul>
          <LineDivisor color="rgba(29, 250, 0, 1)" />
        </div>
      </div>
      <hr />
      <div className="servicios-contenedor invertido" id="AnalisSeguridad">
        <div className="servicios-contenedor-texto">
          <h3>Análisis de Seguridad</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>Gap del estado de seguridad.</li>
            <li>Análisis de madurez de seguridad.</li>
            <li>Diseño de soluciones de seguridad.</li>
          </ul>
          <LineDivisor color="rgba(222, 25, 0, 0.8)" />
        </div>
        <img
          className="servicios-contenedor-img"
          src={IAnalisisSeguridad}
          alt="analisisSeguridadImg"
        />
      </div>
      <hr />
      <div className="servicios-contenedor" id="Control">
        <img
          className="servicios-contenedor-img"
          src={IControlDeAcesso}
          alt="controlAccesoImg"
        />
        <div className="servicios-contenedor-texto">
          <h3>Control de Acceso</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>Diseño de modelo de control de acceso.</li>
            <li>Monitoreo de control de acceso.</li>
            <li>Auditoría de control de acceso.</li>
            <li>Políticas de control de acceso.</li>
            <li>Estándares de control de acceso.</li>
          </ul>
          <LineDivisor color="rgba(189, 25, 230, 0.8)" />
        </div>
      </div>
      <hr />
      <div className="servicios-contenedor invertido">
        <div className="servicios-contenedor-texto" id="PSeguridad">
          <h3>Políticas de Seguridad</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>Diseño y desarrollo de políticas y estándares de seguridad.</li>
            <li>Capacitación en seguridad.</li>
            <li>Aplicación de normatividad estatal.</li>
          </ul>
          <LineDivisor color="rgba(20, 234, 209, 0.8)" />
        </div>
        <img
          className="servicios-contenedor-img"
          src={IPoliticas}
          alt="politicasImg"
        />
      </div>
      <hr />
      <div className="servicios-contenedor" id="ISeguridad">
        <img
          className="servicios-contenedor-img"
          src={IMonitoreo}
          alt="monitoreImg"
        />
        <div className="servicios-contenedor-texto">
          <h3>Incidentes de Seguridad</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>Apoyo en incidentes de seguridad.</li>
            <li>Investigación en incidentes de seguridad.</li>
            <li>Monitoreo de incidentes de seguridad.</li>
            <li>Administración de incidentes de seguridad.</li>
          </ul>
          <LineDivisor color="rgba(226, 16, 18, 0.8)" />
        </div>
      </div>
      <hr />
      <div className="servicios-contenedor invertido " id="Proteccion">
        <div className="servicios-contenedor-texto">
          <h3>Protección</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>Diseño e implementación de controles de seguridad.</li>
            <li>Monitoreo de controles de seguridad.</li>
          </ul>
          <LineDivisor color="rgba(229, 153, 39, 0.8)" />
        </div>
        <img
          className="servicios-contenedor-img"
          src={IProteccion}
          alt="proteccionImg"
        />
      </div>
      <hr />
      <div className="servicios-contenedor" id="PerSeguridad">
        <img
          className="servicios-contenedor-img"
          src={IPersonalSeguridad}
          alt="personalSeguridadImg"
        />
        <div className="servicios-contenedor-texto">
          <h3>Personal de Seguridad</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>
              Recurso especializado en seguridad informática de acuerdo a las
              directrices de las normas ISO 17799 - 27001 - 27002 (SGSI).
            </li>
          </ul>
          <LineDivisor color="rgba(57, 210, 19, 0.8)" />
        </div>
      </div>
      <hr />
      <div className="servicios-contenedor invertido" id="Auditoria">
        <div className="servicios-contenedor-texto">
          <h3>Auditoría</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>Auditoría de cumplimiento de seguridad.</li>
            <li>Auditoría a los sistemas de información.</li>
            <li>Auditoría en la aplicación de controles.</li>
          </ul>
          <LineDivisor color="rgba(50, 225, 216, 0.8)" />
        </div>
        <img
          className="servicios-contenedor-img"
          src={IAuditoria}
          alt="auditoriaImg"
        />
      </div>
      <hr />
      <div className="servicios-contenedor" id="Procesos">
        <img
          className="servicios-contenedor-img"
          src={IProcesos}
          alt="procesosImg"
        />
        <div className="servicios-contenedor-texto">
          <h3>Procesos y Procedimientos</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>Diseño de procesos y procedimientos.</li>
            <li>Diseño del mapa de procesos.</li>
            <li>Auditorías de calidad y control.</li>
            <li>
              Diseño e implementación del sistema de gestión de calidad (SGC).
            </li>
            <li>Diseño de políticas y objetivos de calidad.</li>
          </ul>
          <LineDivisor color="rgba(50, 225, 216, 0.8)" />
        </div>
      </div>
      <hr />
      <div className="servicios-contenedor invertido" id="SGC">
        <div className="servicios-contenedor-texto">
          <h3>SGC - SGSI</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>
              Diseño, implementación y puesta en marcha del sistema de gestión
              de calidad, de acuerdo a las directrices y políticas de la norma
              ISO 9001 versión 2000 y norma ISO 27001.
            </li>
          </ul>
          <LineDivisor color="rgba(241, 222, 36, 0.8)" />
        </div>
        <img
          className="servicios-contenedor-img"
          src={IMonitoreo}
          alt="monitoreoImg"
        />
      </div>
      <hr />
      <div className="servicios-contenedor" id="AuditoriaSistemas">
        <img
          className="servicios-contenedor-img"
          src={IAuditoria}
          alt="auditoriaImg"
        />
        <div className="servicios-contenedor-texto">
          <h3>Auditoría de Sistemas</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>
              Recurso humano especializado en auditoría de sistemas y aplicación
              de estándares internacionales a los sistemas de información de
              acuerdo a los modelos COBIT-COSO-MECI.
            </li>
          </ul>
          <LineDivisor color="rgba(160, 233, 45, 0.8)" />
        </div>
      </div>
      <hr />
      <div className="servicios-contenedor invertido" id="SoftwareWeb">
        <div className="servicios-contenedor-texto">
          <h3>Software y Portales Web</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>
              Desarrollo y puesta en marcha de aplicaciones especializadas y
              específicas para su empresa.
            </li>
            <li>
              Creación de portales corporativos y sistemas de información.
            </li>
          </ul>
          <LineDivisor color="rgba(111, 90, 238, 0.8)" />
        </div>
        <img
          className="servicios-contenedor-img"
          src={IPortalWeb}
          alt="portalWebImg"
        />
      </div>
      <hr />
      <div className="servicios-contenedor" id="Planeacion">
        <img
          className="servicios-contenedor-img"
          src={IPlaneacion}
          alt="planeacionImg"
        />
        <div className="servicios-contenedor-texto">
          <h3>Planeación</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>
              Análisis, planeación y diseño de esquemas de contingencia,
              respaldo y recuperación a nivel de los datos dando continuidad al
              negocio.
            </li>
            <li>
              Análisis, diseño e implementación del Manual de Políticas de Seguridad de la Información.(norma ISO 27011).
            </li>
            <li>
              Análisis diseño e implementación del Manual de tratamiento de datos personales (Ley 1581 del 2013).
            </li>
            <li>
              Análisis, diseño e implementación Manual de Habeas Data Financiero (Ley 1266 del 2008).
            </li>
            <li>
              Análisis, diseño e implementación del SGSI de acuerdo a las directrices de la circular 36 de enero del 2022.
            </li>
          </ul>
          <LineDivisor color="rgba(160, 233, 45, 0.8)" />
        </div>
      </div>
      <hr />
      <div className="servicios-contenedor invertido" id="Redes">
        <div className="servicios-contenedor-texto">
          <h3>Redes</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>
              Diseño e implementación de redes alámbricas e inalámbricas para la
              conexión y administración de recursos empresariales.
            </li>
          </ul>
          <LineDivisor color="rgba(189, 25, 230, 0.8)" />
        </div>
        <img className="servicios-contenedor-img" src={IRedes} alt="redesImg" />
      </div>
      <hr />
      <div className="servicios-contenedor" id="Interventoria">
        <img
          className="servicios-contenedor-img"
          src={IInterventoria}
          alt="interventoriaImg"
        />
        <div className="servicios-contenedor-texto">
          <h3>Interventoría</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>Reingenería en platafomas tecnológicas.</li>
            <li>Data center</li>
            <li>Esquemas de comunicaciones y seguridad informática.</li>
            <li>Aplicativos en producción.</li>
          </ul>
          <LineDivisor color="rgba(20, 234, 209, 0.8)" />
        </div>
      </div>
      <hr />
      <div className="servicios-contenedor invertido" id="AdmiSistemas">
        <div className="servicios-contenedor-texto">
          <h3>Administración de Sistemas</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>
              Configuración de servidores: DNS, PROXY, FIREWALL, CORREO,
              TERMINAL SERVICE, VPN y de aplicación de base de datos.
            </li>
            <li>
              Administración, diseño y creación de planes de mantenimiento para
              bases de datos.
            </li>
          </ul>
          <LineDivisor color="rgba(189, 25, 230, 0.8)" />
        </div>
        <img
          className="servicios-contenedor-img"
          src={ISistemas}
          alt="Imagen Administración de Sistemas"
        />
      </div>
      <hr />
      <div className="servicios-contenedor" id="ciberSeguridad">
        <img
          className="servicios-contenedor-img"
          src={ICiber}
          alt="Imagen de Ciberseguridad"
        />
        <div className="servicios-contenedor-texto">
          <h3>Ciberseguridad</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
          <li>
              Análisis de seguridad para detectar vulnerabilidades y amenazas potenciales.
            </li>
            <li>
              Protección de los sistemas y redes de la empresa contra ataques cibernéticos.
            </li>
          </ul>
          <LineDivisor color="rgba(20, 234, 209, 0.8)" />
        </div>
      </div>
      <hr />
      <div className="servicios-contenedor invertido" id="estrategiaTI">
        <div className="servicios-contenedor-texto">
          <h3>Gobierno y Estrategia TI</h3>
          <ul className="servicios-contenedor-texto-caracteristicas">
            <li>
              Establecer políticas, procedimientos y estándares para el uso de la tecnología en la empresa.
            </li>
            <li>
              Planificar, ejecutar y controlar proyectos de tecnología de manera eficiente y efectiva.
            </li>
            <li>
              Recolectar, analizar y utilizar datos para tomar decisiones informadas en la empresa.
            </li>
            <li>
            Análisis diseño e implementación del Gobierno y Estrategia de TI de acuerdo a las directrices y estándares del modelo COBIT 5 e ITIL.
            </li>
            </ul>
          <LineDivisor color="rgba(189, 25, 230, 0.8)" />
        </div>
        <img
          className="servicios-contenedor-img"
          src={ITI}
          alt="Imagen de Gobierno y Estrategia TI"
        />
      </div>
    </div>
  );
};
