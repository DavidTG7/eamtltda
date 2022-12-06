import { Empresa } from "./empresa/Empresa";
import { Intro } from "./introduccion/Intro";
import { Nosotros } from "./nosotros/Nosotros";
import { Servicios } from "./servicios/Servicios";
import { Ubicacion } from "./ubicacion/Ubicacion";

import "./main.css";
import { Contacto } from "./contacto/Contacto";

export const Main = () => {
  return (
    <main id="main-box">
      <Intro />
      <Empresa />
      <Nosotros />
      <Servicios />
      <Contacto />
      <Ubicacion />
    </main>
  );
};
