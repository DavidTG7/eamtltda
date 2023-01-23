import {
  EmpresaMain,
  EmpresaSingleCard,
  EmpresaTitle,
  ItemImage,
  ItemParagraph,
  ItemSubTitle,
  ItemTextBox,
  LowDivisor,
} from "./empresa.styled";
import vision from "./images/vision.jpg";
import mision from "./images/mision.jpg";
import calidad from "./images/calidad.jpg";
import objetivo from "./images/objetivo.jpg";

export const Empresa = () => {
  return (
    <EmpresaMain id="empresa">
      <EmpresaTitle>EMPRESA</EmpresaTitle>
      <hr />
      <EmpresaSingleCard id="mision">
        <ItemImage src={mision} alt="misionImg"/>
        <ItemTextBox>
          <ItemSubTitle>Misión</ItemSubTitle>
          <ItemParagraph>
            Analizar en forma integral y detallada a las organizaciones, para
            identificar las debilidades que le impiden cumplir el objeto
            propuesto, brindando en forma oportuna soluciones prácticas,
            asegurar su estabilidad y competitividad con una adecuada gestión
            gerencial.
          </ItemParagraph>
          <LowDivisor color="rgb(45 165 240)" />
        </ItemTextBox>
      </EmpresaSingleCard>
      <hr />
      <EmpresaSingleCard id="vision" left>
        <ItemImage src={vision} alt="visionImg"/>
        <ItemTextBox>
          <ItemSubTitle>Visión</ItemSubTitle>
          <ItemParagraph left>
            Ser en el 2025 reconocidos como una empresa líder en asesoría y
            consultoría en tecnología, con posicionamiento y cobertura en el
            mercado nacional, convirtiéndonos en la mejor alianza estratégica
            para nuestros clientes, proporcionando altos estándares de calidad
            con servicios oportunos y efectivos.
          </ItemParagraph>
          <LowDivisor color="orange" />
        </ItemTextBox>
      </EmpresaSingleCard>
      <hr />
      <EmpresaSingleCard id="politicas-calidad">
        <ItemImage src={calidad} alt="calidadImg"/>
        <ItemTextBox>
          <ItemSubTitle>Políticas de Calidad</ItemSubTitle>
          <ItemParagraph>
            Nuestro compromiso con la Calidad, es prestar Servicios
            Profesionales de Asesoría y Consultoría cumpliendo con los más altos
            estándares de CALIDAD de acuerdo a las directrices, políticas y
            lineamientos de las normas Internacionales ISO 9001, ISO 17799, ISO
            27001, ISO 27002, ISO 14000, que satisfagan las necesidades y
            expectativas de nuestros Clientes, para lo cual:
          </ItemParagraph>
          <ul>
            <li>
              Contamos con un Recurso Humano competente, eficaz y comprometido
              con el mejoramiento continuo de nuestros procesos y
              procedimientos, cumpliendo con los requisitos establecidos en la
              NTC-ISO 9001:2000, permitiéndonos ser competitivos, confiables,
              seguros y consolidarnos en el sector Público y Privado, creando
              una cultura de fomento empresarial.
            </li>
            <li>
              El compromiso de la alta Gerencia es revisar, actualizar, cumplir
              y hacer cumplir la presente Política de Calidad de acuerdo con las
              necesidades de la comunidad, logrando con esto aminorar las
              amenazas de riesgo relacionadas con la Implementación y
              Mantenimiento del Sistema de Gestión de Calidad.
            </li>
          </ul>
          <LowDivisor color="rgba(240, 31, 255, 1)" />
        </ItemTextBox>
      </EmpresaSingleCard>
      <hr />
      <EmpresaSingleCard column id="objetivos-calidad">
        <ItemImage src={objetivo} alt="objetivosImg"/>
        <ItemTextBox>
          <ItemSubTitle>Objetivos de Calidad</ItemSubTitle>
          <ItemParagraph left>
            En relación con la Política de Calidad definida y con el ánimo de
            implementar y mejorar continuamente la eficacia del sistema de
            Gestión de Calidad de la Empresa, bajo los requisitos de la Norma
            NTC-ISO 9001:2000, y con el fin de incrementar el nivel de
            satisfacción de los Clientes y Usuarios de los servicios prestados,
            incluida la Comunidad, EAMT LTDA se propone:
          </ItemParagraph>
          <ul className="ol-2column">
            <li>
              Garantizar las características de calidad en cuanto a oportunidad,
              seguridad, confiabilidad y asesoría establecidas por la Empresa y
              ofrecidas a los clientes y público en general.
            </li>
            <li>
              Establecer un adecuado y efectivo servicio de satisfacción y
              orientación al cliente, por medio de la gestión y atención
              oportuna de quejas, reclamos, sugerencias y consultas realizadas
              por los clientes tanto internos como externos.
            </li>
            <li>
              Movilizar la empresa hacia la excelencia y a la calidad total,
              mediante la habilitación del trabajo, la aplicación tecnológica e
              infraestructura adecuada y el desarrollo del talento humano.
            </li>
            <li>
              Maximizar la eficiencia de la operación para disminuir costos,
              para brindar asesorías y consultorías con altos índices de calidad
              y control, así mismo aumentar las reservas de capital de la
              empresa.
            </li>
            <li>
              Mejorar y mantener la competencia y desempeño del Recurso Humano
              que afecta directamente la calidad del servicio, a través de
              programas de capacitación que afiancen sus fortalezas y destrezas,
              y de un plan de comunicación y sensibilización en donde comprendan
              la importancia de la satisfacción del cliente y que entiendan el
              direccionamiento estratégico de la empresa.
            </li>
            <li>
              Mantener el nivel de mejora continua en los procesos del Sistema
              de Gestión de la Calidad, identificando y previniendo los riesgos
              inherentes a la operación, aplicando las acciones necesarias para
              mitigar su impacto en la gestión.
            </li>
          </ul>
          <LowDivisor color="rgba(29, 250, 0, 1)" />
        </ItemTextBox>
      </EmpresaSingleCard>
    </EmpresaMain>
  );
};
