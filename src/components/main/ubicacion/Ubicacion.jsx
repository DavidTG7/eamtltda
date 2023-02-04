import "./ubicacion.css";
import React from 'react';
// import { WebView } from 'react-native';

export const Ubicacion = () => {
  return (
    <div className="Ubicacion">
      <iframe
        title="mapa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5405849340646!2d-75.59389478573432!3d6.192169128645449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46826eab24164b%3A0xb88e6bfad6aabc2e!2sCl.%2086%20%2351a-61%2C%20San%20Fernando%2C%20Itag%C3%BCi%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1671743014890!5m2!1ses!2sco"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        className="mapa"
      ></iframe>
    {/* <div style="text-align:center;">
      <div style="margin:8px 0px 4px;"><a href="https://www.calameo.com/books/007286580ca28039afe21" target="_blank">Portafolio De Servicios Eamt Ltda</a></div><iframe src="//v.calameo.com/?bkcode=007286580ca28039afe21&mode=mini" width="480" height="300" frameborder="0" scrolling="no" allowtransparency allowfullscreen style="margin:0 auto;"></iframe><div style="margin:4px 0px 8px;"><a href="http://www.calameo.com/" target="_blank">Read more publications on Calaméo</a>
      </div>
    </div> */}
  </div>
  );
};

// Nominacion de clases: BEM Block Element Modifier
