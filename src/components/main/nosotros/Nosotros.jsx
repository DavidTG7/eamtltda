import { todosLosServicios } from "./nosotros.helper";

export const Nosotros = () => {
  return (
    <section id="servicios" className="ancla">
      <h3>SERVICIOS</h3>
      <hr />
      <div id="servicios-grid">{todosLosServicios}</div>
    </section>
  );
};
