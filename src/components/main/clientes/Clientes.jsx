import { imagesPublico } from "./images/fotosIndex";
import { imagenesEmpleados } from "./images/fotosEmpleados";
import { imagenesCorporativo } from "./images/fotosCorporativo";

import { LineDivisor } from "../servicios/servicios.styled";

import "./clientes.css";
import { useState } from "react";

export const Clientes = () => {
  const [isPublic, setIsPublic] = useState(true);
  const [isCorporative, setIsCorporative] = useState(false);
  const [isEmployees, setIsEmployees] = useState(false);

  const handlePublic = () => {
    setIsPublic(true);
    setIsCorporative(false);
    setIsEmployees(false);
  };

  const handleCorporative = () => {
    setIsPublic(false);
    setIsCorporative(true);
    setIsEmployees(false);
  };

  const handleEmployees = () => {
    setIsPublic(false);
    setIsCorporative(false);
    setIsEmployees(true);
  };

  return (
    <>
      <div id="clientes" className="clientes__container">
        <h3 className="clientes__title">NUESTROS CLIENTES</h3>
        <hr />
        <div className="clientes__sectores">
          <p>
            {/* Hemos tenido la oportunidad de trabajar con los sectores: Público y Privado,
            Corporativo Solidario, Financiero y Fondos de Empleados. Con una trayectoria superior a los 28 años. */}
            Contamos con una trayectoria y experiencia superior a los 28 años
            trabajando con diversos clientes en los sectores:
          </p>
        </div>
        <div className="clientes__botones">
          <button onClick={handlePublic}>PÚBLICO Y PRIVADO</button>
          <button onClick={handleCorporative}>
            CORPORATIVO SOLIDARIO Y FINANCIERO
          </button>
          <button onClick={handleEmployees}>FONDO DE EMPLEADOS</button>
        </div>
        {isPublic && (
          <div className="clientes__slider">
            <div className="clientes__slider-fotos adelante1">
              {imagesPublico}
              {imagesPublico}
            </div>
            <div className="clientes__slider-cover" />
          </div>
        )}
        {isCorporative && (
          <div className="clientes__slider">
            <div className="clientes__slider-fotos atras1">
              {imagenesCorporativo}
              {imagenesCorporativo}
            </div>
            <div className="clientes__slider-cover" />
          </div>
        )}
        {isEmployees && (
          <div className="clientes__slider">
            <div className="clientes__slider-fotos adelante2">
              {imagenesEmpleados}
              {imagenesEmpleados}
              {imagenesEmpleados}
            </div>
            <div className="clientes__slider-cover" />
          </div>
        )}
        
        {/* <h4 className="clientes__h4-1">Público y Privado</h4>
        <div className="clientes__slider">
          <div className="clientes__slider-fotos adelante1">
            {imagesPublico}
            {imagesPublico}
          </div>
          <div className="clientes__slider-cover" />
        </div>
        <h4 className="clientes__h4-2">Corporativo, Solidario y Financiero</h4>
        <div className="clientes__slider">
          <div className="clientes__slider-fotos atras1">
            {imagenesCorporativo}
            {imagenesCorporativo}
          </div>
          <div className="clientes__slider-cover" />
        </div>
        <h4 className="clientes__h4-3">Fondo de Empleados</h4>
        <div className="clientes__slider">
          <div className="clientes__slider-fotos adelante2">
            {imagenesEmpleados}
            {imagenesEmpleados}
            {imagenesEmpleados}
          </div>
          <div className="clientes__slider-cover" />
        </div> */}
      </div>
    </>
  );
};
