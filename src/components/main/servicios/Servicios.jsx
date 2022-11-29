import "./servicios.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { RiTeamFill } from "react-icons/ri";
import logo from '../../../imagenes/Logo_Editado.png';

export const Servicios = () => {
  return (
    <div className="contenedor-servicios-general">
      <Tabs
      defaultActiveKey="gestion_riesgos"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab className="contenedor-servicios-tabs" eventKey="gestion_riesgos" 
        title={
          <span className="contenedor-servicios-tabs">
            <img
                className="contenedor-servicios-tabs-imagen"
                src={logo}
                alt="Logo"
            />
            Gestion de Riesgos
          </span>
          }>
        <div>
          <ul>
            <li>ANÁLISIS DE RIESGOS.</li>
            <li>MANTENIMIENTO DE MAPAS DE RIESGOS.</li>
            <li>PRUEBAS DE INTRUSION DE SISTEMAS.</li>
            <li>MONITOREO DE EVENTOS DE SEGURIDAD.</li>
            <li>ADMINISTRACIÓN DE INCIDENTES DE SEGURIDAD.</li>
            <li>DISENO DE PROCEDIWENTOS DE SEGURIDAD.</li>
          </ul>
        </div>
      </Tab>
      <Tab className="contenedor-servicios-tabs"
      eventKey="seguridad" 
      title={
        <span className="contenedor-servicios-tabs">
          <img
              className="contenedor-servicios-tabs-imagen"
              src={logo}
              alt="Logo"
          />
          Analisis De Seguridad
        </span>
        }>
      <div>
          <ul>
            <li>GAP DEL ESTADO DE SEGURIDAD.</li>
            <li>ANÁLISIS DE MADUREZ DE SEGURIDAD.</li>
            <li>DISEÑO DE SOLUCIONES DE SEGURIDAD.</li>
          </ul>
        </div>
      </Tab>
      <Tab className="contenedor-servicios-tabs" 
      eventKey="Acceso" 
      title={
        <span className="contenedor-servicios-tabs">
          <img
              className="contenedor-servicios-tabs-imagen"
              src={logo}
              alt="Logo"
          />
          Control de Acceso
        </span>
        }>
      <div>
          <ul>
            <li>DISEÑO DE MODELO DE CONTROL DE ACCESO.</li>
            <li>MONITOREO DE CONTROL DE ACCESO.</li>
            <li>AUDITORIA DE CONTROL DE ACCESO.</li>
            <li>POLÍTlCAS DE CONTROL DE ACCESO.</li>
            <li>ESTÁNDARES DE CONTROL DE ACCESO.</li>
          </ul>
        </div>
      </Tab>
    </Tabs>
    </div>
  );
};

// Nominacion de clases: BEM Block Element Modifier
