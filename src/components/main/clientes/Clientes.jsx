import { imagesPublico } from "./images/fotosIndex";
import { imagenesEmpleados } from "./images/fotosEmpleados";
import { imagenesCorporativo } from "./images/fotosCorporativo";

import "./clientes.css";

export const Clientes = () => {
  return (
    <>
      <div id="clientes" className="clientes__container">
        <h3 className="clientes__title">CLIENTES</h3>
        <hr />
        <div className="clientes__sectores">
          <p>
            Hemos tenido la oportunidad de trabajar con los sectores: Público,
            Corporativo Solidario, Financiero y Fondos de Empleados.
            <br />
            <br />
            Hemos acompañado el crecimiento y la evolución de empresas como:
            <b> Positiva, SumaRed, Funat, MinTic, OleoFlores, Uniban, Previsora</b>.
          </p>
        </div>
        <div className="clientes__slider">
          <div className="clientes__slider-fotos">
            {imagesPublico}
            {imagesPublico}
          </div>
          <div className="clientes__slider-fotos">
            {imagenesCorporativo}
            {imagenesCorporativo}
          </div>
          <div className="clientes__slider-fotos">
            {imagenesEmpleados}
            {imagenesEmpleados}
          </div>
          <div className="clientes__slider-cover" />
        </div>
      </div>
    </>
  );
};
