import { images } from "./images/publico/fotosIndex";

import "./clientes2.css";

const ClientCard = ({sector}) => {
  return(
    <div className="clienteCard__container">
      <p>{sector}</p>
    </div>
  )
}

export const Clientes2 = () => {
  return (
    <>
      <div className="clientes__container">
        <p className="clientes__title">CLIENTES 2</p>
        <hr />
        <div className="clientes__sectores" >
          <p>Hemos tenido la oportunidad de trabajar con los sectores:</p>
          <div className="clientes__sectores-cards">
            <ClientCard sector="Corporativo Solidario" />
            <ClientCard sector="Público" />
            <ClientCard sector="Financiero" />
            <ClientCard sector="Fondo de Empleados" />
          </div>
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
