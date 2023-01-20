import { imagesPublico } from "./images/fotosIndex";
import { imagenesEmpleados } from "./images/fotosEmpleados";
import { imagenesCorporativo } from "./images/fotosCorporativo";

import { LineDivisor } from "../servicios/servicios.styled";

import "./clientes.css";

export const Clientes = () => {
  return (
    <>
      <div id="clientes" className="clientes__container">
        <h3 className="clientes__title">NUESTROS CLIENTES</h3>
        <hr />
        <div className="clientes__sectores">
          <p>
            {/* Hemos tenido la oportunidad de trabajar con los sectores: Público y Privado,
            Corporativo Solidario, Financiero y Fondos de Empleados. Con una trayectoria superior a los 28 años. */}
            Contamos con una trayectoria y experiencia superior a los 28 años trabajando con diversos clientes en los sectores:  
          </p>
        </div>
        {/* <div className="clientes__slider">
          <div className="clientes__slider-fotos adelante1">
            {imagesPublico}
            {imagesPublico}
          </div>
          <div className="clientes__slider-fotos atras1">
            {imagenesCorporativo}
            {imagenesCorporativo}
          </div>
          <div className="clientes__slider-fotos adelante2">
            {imagenesEmpleados}
            {imagenesEmpleados}
            {imagenesEmpleados}
          </div>
          <div className="clientes__slider-cover" />
        </div> */}
        {/* Secciones con titulo */}
        {/* <div className="clientes-contenedor-texto"> */}
          <h4 className="clientes__h4-1">Público y Privado</h4>
          {/* <LineDivisor color="rgba(189,25,230,0.8)"/> */}
        {/* </div> */}
        <div className="clientes__slider">
          <div className="clientes__slider-fotos adelante1">
            {imagesPublico}
            {imagesPublico}
          </div>
          <div className="clientes__slider-cover" />
        </div>
        {/* <div className="clientes-contenedor-texto"> */}
          <h4 className="clientes__h4-2">Corporativo, Solidario y Financiero</h4>
          {/* <LineDivisor color="rgba(29, 250, 0, 1)"/> */}
        {/* </div> */}
        <div className="clientes__slider">
          <div className="clientes__slider-fotos atras1">
            {imagenesCorporativo}
            {imagenesCorporativo}
          </div>
          <div className="clientes__slider-cover" />
        </div>
        {/* <div className="clientes-contenedor-texto"> */}
          <h4 className="clientes__h4-3">Fondo de Empleados</h4>
          {/* <LineDivisor color="rgba(20,234,209,0.8)"/> */}
        {/* </div> */}
        <div className="clientes__slider">
          <div className="clientes__slider-fotos adelante2">
            {imagenesEmpleados}
            {imagenesEmpleados}
            {imagenesEmpleados}
          </div>
          <div className="clientes__slider-cover" />
        </div>
      </div>
    </>
  );
};
