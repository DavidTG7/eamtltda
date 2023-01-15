import { images } from "./images/publico/fotosIndex";

import "./clientes2.css";

export const Clientes2 = () => {
  return (
    <>
      <div className="clientes__slider-container">
        <p className="clientes__slider-title">CLIENTES 2</p>
        <hr />
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
