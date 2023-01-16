import { images } from "./images/publico/fotosIndex";

import "./clientes2.css";

const ClientCard = ({ sector }) => {
  return (
    <div className="clientCard__container">
      <p>{sector}</p>
    </div>
  );
};

export const Clientes2 = () => {
  return (
    <>
      <div className="clientes__container">
        <p className="clientes__title">CLIENTES</p>
        <hr />
        <div className="clientes__sectores">
          <p>
            Hemos tenido la oportunidad de trabajar con los sectores Público,
            Corporativo Solidario, Financiero y Fondos de Empleados.
            <br />
            <br />
            Hemos acompañado el crecimiento y la evolución de empresas como:
            <b> Positiva, SumaRed,Funat, MinTic, OleoFlores</b>.
          </p>
          {/* <div className="clientes__sectores-cards">
            <ClientCard sector="Corporativo Solidario" />
            <ClientCard sector="Público" />
            <ClientCard sector="Financiero" />
            <ClientCard sector="Fondo de Empleados" />
          </div> */}
        </div>
        <div className="clientes__slider">
          <div className="clientes__slider-fotos">
            {images}
            {images}
          </div>
          <div className="clientes__slider-cover" />
        </div>
      </div>
    </>
  );
};
