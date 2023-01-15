import { Empresa } from "./empresa/Empresa";
import { Intro } from "./introduccion/Intro";
import { Nosotros } from "./nosotros/Nosotros";
import { Servicios } from "./servicios/Servicios";
import { Clientes } from "./clientes/Clientes";
import { Ubicacion } from "./ubicacion/Ubicacion";

import "./main.css";
import { Contacto } from "./contacto/Contacto";
import { Clientes2 } from "./clientes/Clientes2";

export const Main = () => {
  return (
    <main id="main-box">
      <Intro />
      <Empresa />
      <Nosotros />
      <Servicios />
      <Clientes2 />
      <Clientes />
      <Contacto />
      <Ubicacion />
    </main>
  );
};
