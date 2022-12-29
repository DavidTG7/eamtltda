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
    href: "Riesgos",
    imagen: gestionRiesgos,
  },
  {
    nombre: "Análisis de Seguridad",
    href: "AnalisSeguridad",
    imagen: analisisSeguridad,
  },
  {
    nombre: "Conctrol de Acceso",
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
    nombre: "Auditoria",
    href: "Auditoria",
    imagen: auditoria,
  },
  {
    nombre: "Procesos y Procedimientos",
    href: "Procesos",
    imagen: procesosProcedimientos,
  },
  {
    nombre: "SGC",
    href: "SGC",
    imagen: sgc,
  },
  {
    nombre: "Auditoria de Sistemas",
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
    nombre: "Interventoria",
    href: "Interventoria",
    imagen: interventoria,
  },
];

export const todosLosServicios = servicios.map(({ nombre, href, imagen }) => {
  return (
    <a href={`#${href}`} className="servicio-caja" key={nombre}>
      <img className="servicio-icono" src={imagen} alt={nombre} />
      <p>{nombre}</p>
    </a>
  );
});
