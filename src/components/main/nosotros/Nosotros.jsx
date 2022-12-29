import { todosLosServicios } from "./nosotros.helper";

export const Nosotros = () => {
  return (
    <section id="nosotros">
      <h3>SERVICIOS</h3>
      <div id="servicios-grid">{todosLosServicios}</div>
    </section>
  );
};
