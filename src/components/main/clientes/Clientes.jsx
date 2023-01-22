import { imagesPublico } from "./images/fotosIndex";
import { imagenesEmpleados } from "./images/fotosEmpleados";
import { imagenesCorporativo } from "./images/fotosCorporativo";

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
            Contamos con una trayectoria y experiencia superior a los 28 años
            trabajando con diversos clientes en los sectores:
          </p>
        </div>
        <div className="clientes__botones">
          <button
            className={isPublic && "clientes__botones-active"}
            onClick={handlePublic}
          >
            PÚBLICO Y PRIVADO
          </button>
          <button
            className={isCorporative && "clientes__botones-active"}
            onClick={handleCorporative}
          >
            CORPORATIVO SOLIDARIO Y FINANCIERO
          </button>
          <button
            className={isEmployees && "clientes__botones-active"}
            onClick={handleEmployees}
          >
            FONDO DE EMPLEADOS
          </button>
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
      </div>
    </>
  );
};
