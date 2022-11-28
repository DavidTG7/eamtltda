import Card from "react-bootstrap/Card";

export const QuienesSomos = () => {
  return (
    <section id="quienes-somos">
      <Card>
        <Card.Header as="h5">¿Quiénes somos?</Card.Header>
        <Card.Body>
          <Card.Title>EAMT LTDA</Card.Title>
          <Card.Text>
            Es una empresa colombiana con 25 años de experiencia en Consultoría
            y Asesoría que apoya las organizaciones en la auditoria de procesos,
            detección de riesgos, diseño de estrategias, ejecución de planes de
            acción y apoya las iniciativas de documentación, implementación y
            automatización de Procesos de Negocios.
            <br />
            Ponemos al servicio de nuestros aliados estratégicos la experiencia
            adquirida en la participación de proyectos en el sector público y
            privado, bajo la metodología de Auditoria, Riesgos, Calidad y BPM
            para la gestión de procesos y flujos de trabajo, contribuyendo en el
            aumento de la eficiencia, eficacia, el rendimiento y la agilidad de
            las operaciones diarias en las organizaciones.
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
};
