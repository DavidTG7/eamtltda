import { Empresa } from "./empresa/Empresa";
import { Intro } from "./introduccion/Intro";
import { Nosotros } from "./nosotros/Nosotros";

export const Main = () => {
  return (
    <main>
      <Intro />
      <Nosotros />
      <Empresa />
    </main>
  );
};
