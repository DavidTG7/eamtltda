import gestionRiesgos from "./images/gestionRiesgosPlano.svg";
import analisisSeguridad from "./images/analisisSeguridadPlano.svg";
import controlAcceso from "./images/controlAccesoPlano.svg";
import politicasSeguridad from "./images/politicasSeguridadPlano.svg";
import inicidenteSeguridad from "./images/incidentesSeguridadPlano.svg";
import proteccion from "./images/proteccionPlano.svg";
import personalSeguridad from "./images/personalSeguridadPlano.svg";
import auditoria from "./images/auditoriaPlano.svg";
import procesosProcedimientos from "./images/procesosProcedimientosPlano.svg";
import sgc from "./images/scgPlano.svg";
import auditoriaSistemas from "./images/auditoriaSistemasPlano.svg";
import software from "./images/softwareWebPlano.svg";
import planeacion from "./images/planeacionPlano.svg";
import redes from "./images/redesPlano.svg";
import interventoria from "./images/interventoriaPlano.svg";
import ciberSeguridad from "./images/cyberSeguridadPlano.svg";
import estrategiaTI from "./images/estrategiaTIPlano.svg";
import "./nosotros.css";

const servicios = [
  {
    nombre: "Gestión de Riesgos",
    href: "Riesgos",
    imagen: gestionRiesgos,
  },
  {
    nombre: "Análisis de Seguridad",
    href: "AnalisSeguridad",
    imagen: analisisSeguridad,
  },
  {
    nombre: "Control de Acceso",
    href: "Control",
    imagen: controlAcceso,
  },
  {
    nombre: "Políticas de Seguridad",
    href: "PSeguridad",
    imagen: politicasSeguridad,
  },
  {
    nombre: "Incidentes de Seguridad",
    href: "ISeguridad",
    imagen: inicidenteSeguridad,
  },
  {
    nombre: "Protección",
    href: "Proteccion",
    imagen: proteccion,
  },
  {
    nombre: "Personal de Seguridad",
    href: "PerSeguridad",
    imagen: personalSeguridad,
  },
  {
    nombre: "Auditoría",
    href: "Auditoria",
    imagen: auditoria,
  },
  {
    nombre: "Procesos y Procedimientos",
    href: "Procesos",
    imagen: procesosProcedimientos,
  },
  {
    nombre: "SGC-9001 ",
    nombre_dos : "SGSI-27001",
    href: "SGC",
    imagen: sgc,
  },
  {
    nombre: "Auditoría de Sistemas",
    href: "AuditoriaSistemas",
    imagen: auditoriaSistemas,
  },
  {
    nombre: "Software y Portales Web",
    href: "SoftwareWeb",
    imagen: software,
  },
  {
    nombre: "Planeación",
    href: "Planeacion",
    imagen: planeacion,
  },
  {
    nombre: "Redes",
    href: "Redes",
    imagen: redes,
  },
  {
    nombre: "Interventoría",
    href: "Interventoria",
    imagen: interventoria,
  },
  {
    nombre: "CiberSeguridad",
    href: "ciberSeguridad",
    imagen: ciberSeguridad,
  },
  {
    nombre: "Gobierno y Estrategia TI",
    href: "estrategiaTI",
    imagen: estrategiaTI,
  },
];

export const todosLosServicios = servicios.map(({ nombre, href, imagen , nombre_dos}) => {
  return (
    <a href={`#${href}`} className="servicio-caja" key={nombre}>
      <img className="servicio-icono" src={imagen} alt={`logo-${nombre}`} />
      <p>
        {nombre}<br/>
        {nombre_dos}
      </p>
    </a>
  );
});
