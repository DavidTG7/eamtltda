import { Empresa } from "./empresa/Empresa";
import { Intro } from "./introduccion/Intro";
import { Nosotros } from "./nosotros/Nosotros";
import { QuienesSomos } from "./quienesSomos/QuienesSomos";
import "./main.css";

export const Main = () => {
  return (
    <main id="main-box">
      <Intro />
      <QuienesSomos />
      <Empresa />
      <Nosotros />
    </main>
  );
};
