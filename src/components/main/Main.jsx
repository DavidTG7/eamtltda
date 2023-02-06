import { Empresa } from "./empresa/Empresa";
import { Intro } from "./introduccion/Intro";
import { Nosotros } from "./nosotros/Nosotros";
import { Servicios } from "./servicios/Servicios";
import { Clientes } from "./clientes/Clientes";
import { Ubicacion } from "./ubicacion/Ubicacion";
import { Contacto } from "./contacto/Contacto";
import { Portafolio } from "./portafolio/Portafolio";

import "./main.css";

export const Main = () => {
  return (
    <main id="main-box">
      <Intro />
      <Empresa />
      <Nosotros />
      <Servicios />
      <Clientes />
      <Portafolio />
      <Contacto />
      <Ubicacion />
    </main>
  );
};
