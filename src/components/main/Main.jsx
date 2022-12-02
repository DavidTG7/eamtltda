import { Empresa } from "./empresa/Empresa";
import { Intro } from "./introduccion/Intro";
import { Nosotros } from "./nosotros/Nosotros";
import { Servicios } from "./servicios/Servicios";

import "./main.css";
import { Contacto } from "./contacto/Contacto";

export const Main = () => {
  return (
    <main id="main-box">
      <Intro />
      <Empresa />
      <Nosotros />
<<<<<<< HEAD
      <Contacto />
=======
      <Servicios /> 
>>>>>>> 79c1f6abc61e4a799c4e49d2e62954ef1531a33e
    </main>
  );
};
