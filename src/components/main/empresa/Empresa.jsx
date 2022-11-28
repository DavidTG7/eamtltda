import Accordion from "react-bootstrap/Accordion";

export const Empresa = () => {
  return (
    <section id="empresa">
      <Accordion defaultActiveKey="0" style={{ textAlign: "justify" }}>
        <Accordion.Item eventKey="0">
          <Accordion.Header id="mision">MISIÓN</Accordion.Header>
          <Accordion.Body>
            Analizar en forma integral y detallada a las organizaciones, para
            identificar las debilidades que le impiden cumplir el objeto
            propuesto, brindando en forma oportuna soluciones prácticas,
            asegurar su estabilidad y competitividad con una adecuada gestión
            gerencial.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header id="vision">VISIÓN</Accordion.Header>
          <Accordion.Body>
            Ser en el 2025 reconocidos como la empresa líder en Asesoría y
            Consultoría en Tecnología, con posicionamiento y cobertura en el
            mercado Nacional, convirtiéndonos en la mejor alianza estratégica
            para nuestros clientes, proporcionando altos estándares de calidad
            con servicios oportunos y efectivos.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header id="politicas-calidad">
            POLÍTICAS DE CALIDAD
          </Accordion.Header>
          <Accordion.Body>
            Nuestro compromiso con la Calidad, es prestar Servicios
            Profesionales de Asesoría y Consultoría cumpliendo con los más altos
            estándares de CALIDAD de acuerdo a las directrices, políticas y
            lineamientos de las normas Internacionales ISO 9001, ISO 17799, ISO
            27001, ISO 27002, ISO 14000, que satisfagan las necesidades y
            expectativas de nuestros Clientes, para lo cual:
            <br />
            <br />
            <ol type="a">
              <li>
                Contamos con un Recurso Humano competente, eficaz y comprometido
                con el mejoramiento continuo de nuestros procesos y
                procedimientos, cumpliendo con los requisitos establecidos en la
                NTC-ISO 9001:2000, permitiéndonos ser competitivos, confiables,
                seguros y consolidarnos en el sector Público y Privado, creando
                una cultura de fomento empresarial.
              </li>
              <li>
                El compromiso de la alta Gerencia es revisar, actualizar,
                cumplir y hacer cumplir la presente Política de Calidad de
                acuerdo con las necesidades de la comunidad, logrando con esto
                aminorar las amenazas de riesgo relacionadas con la
                Implementación y Mantenimiento del Sistema de Gestión de
                Calidad.
              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header id="objetivos-calidad">
            POLÍTICAS DE CALIDAD
          </Accordion.Header>
          <Accordion.Body>
            En relación con la Política de Calidad definida y con el ánimo de
            implementar y mejorar continuamente la eficacia del sistema de
            Gestión de Calidad de la Empresa, bajo los requisitos de la Norma
            NTC-ISO 9001:2000, y con el fin de incrementar el nivel de
            satisfacción de los Clientes y Usuarios de los servicios prestados,
            incluida la Comunidad, EAMT LTDA se propone:
            <br />
            <br />
            <ol type="a">
              <li>
                Garantizar las características de calidad en cuanto a
                oportunidad, seguridad, confiabilidad y asesoría establecidas
                por la Empresa y ofrecidas a los clientes y público en general.
              </li>
              <li>
                Establecer un adecuado y efectivo servicio de Satisfacción y
                orientación al Cliente, por medio de la gestión y atención
                oportuna de quejas, reclamos, sugerencias y consultas realizadas
                por los Clientes tanto internos como externos.
              </li>
              <li>
                Movilizar a la Empresa hacia la Excelencia y a la Calidad Total,
                mediante la habilitación del trabajo, la aplicación tecnológica
                e infraestructura adecuada y el desarrollo del Talento Humano.
              </li>
              <li>
                Maximizar la eficiencia de la operación para disminuir costos,
                para brindar asesorías y consultorías con altos índices de
                calidad y control, así mismo aumentar las reservas de Capital de
                la Empresa.
              </li>
              <li>
                Mejorar y mantener la competencia y desempeño del Recurso Humano
                que afecta directamente la Calidad del servicio, a través de
                programas de Capacitación que afiancen sus Fortalezas y
                Destrezas, y de un plan de Comunicación y Sensibilización en
                donde comprendan la importancia de la Satisfacción del Cliente y
                que entiendan el direccionamiento estratégico de la Empresa.
              </li>
              <li>
                Mantener el nivel de mejora continua en los procesos del Sistema
                de Gestión de la Calidad, identificando y previniendo los
                riesgos inherentes a la operación, aplicando las acciones
                necesarias para mitigar su impacto en la Gestión
              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};
