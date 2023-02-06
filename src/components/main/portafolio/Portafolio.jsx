import "./portafolio.css";
import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import portada from "./imagenes/1Portada.jpg";
import QuienesSomos from "./imagenes/2QuienesSomos.jpg";
import Vision from "./imagenes/3Vision.jpg";
import Servicios from "./imagenes/4Servicios.jpg";
import Servicios_pag1 from "./imagenes/5Servicios_pag1.jpg";
import Servicios_pag2 from "./imagenes/6Servicios_pag2.jpg";
import Servicios_pag3 from "./imagenes/7Servicios_pag3.jpg";
import Servicios_pag4 from "./imagenes/8Servicios_pag4.jpg";
import Clientes from "./imagenes/9Clientes.jpg";
import Clientes_pag1 from "./imagenes/10Cilentes_pag1.jpg";
import Clientes_pag2 from "./imagenes/11Cilentes_pag2.jpg";
import QR from "./imagenes/12QR.jpg";

// const Page = React.forwardRef((props, ref) => {
//   return (
//       <div className="demoPage" ref={ref}>
//           /* ref required */
//           <h1>Page Header</h1>
//           <p>{props.children}</p>
//           <p>Page number: {props.number}</p>
//       </div>
//   );
// });

// export const Portafolio = () => {
//   return (
//     <div id="portafolio" className="portafolio ancla" >
//       <h3>PORTAFOLIO</h3>
//       <hr />
//       {/* <iframe
//         title="Portafolio" 
//         src="http://v.calameo.com/?bkcode=007286580e211ad7460eb&mode=mini" 
//         width="480" 
//         height="300" 
//         allowtransparency 
//         allowfullscreen >
//       </iframe> */}
//         <HTMLFlipBook width={300} height={500}>
//             {/* <Page number="1">Page text</Page> */}
//             <div className="demoPage">
//               <img
//                 className="portafolio-imagen"
//                 src={portada}
//                 alt="Portada del Portafolio"
//               />
//             </div>
//             <div className="demoPage">
//               <img
//                 className="portafolio-imagen"
//                 src={QuienesSomos}
//                 alt="Portada del Portafolio"
//               />
//             </div>
//             <div className="demoPage">
//               <img
//                 className="portafolio-imagen"
//                 src={Vision}
//                 alt="Portada del Portafolio"
//               />
//             </div>
//             <div className="demoPage">
//               <img
//                 className="portafolio-imagen"
//                 src={Servicios}
//                 alt="Portada del Portafolio"
//               />
//             </div>
//         </HTMLFlipBook>
//     </div>
//   );
// };
// Nominacion de clases: BEM Block Element Modifier

// import DemoBlock from './appPortafolio'
export const Portafolio = () => {  
  return (
    <div id="portafolio" className="portafolio ancla" >
      <h3>PORTAFOLIO</h3>
       <hr />
       {/* <iframe
        title="Portafolio" 
        src="http://v.calameo.com/?bkcode=007286580e211ad7460eb&mode=mini" 
        width="480" 
        height="300" 
        allowtransparency 
        allowfullscreen >
      </iframe> */}
      <div className="portafolio-contenedor">
        <HTMLFlipBook width={350} height={500}>
              <div className="demoPage">
                <img
                  className="portafolio-imagen"
                  src={portada}
                  alt="Portada del Portafolio"
                />
              </div>
              <div className="demoPage">
                <img
                  className="portafolio-imagen"
                  src={QuienesSomos}
                  alt="Portada del Portafolio"
                />
              </div>
              <div className="demoPage">
                <img
                  className="portafolio-imagen"
                  src={Vision}
                  alt="Portada del Portafolio"
                />
              </div>
              <div className="demoPage">
                <img
                  className="portafolio-imagen"
                  src={Servicios}
                  alt="Portada del Portafolio"
                />
              </div>
              <div className="demoPage">
                <img
                  className="portafolio-imagen"
                  src={Servicios_pag1}
                  alt="Portada del Portafolio"
                />
              </div>
              <div className="demoPage">
                <img
                  className="portafolio-imagen"
                  src={Servicios_pag2}
                  alt="Portada del Portafolio"
                />
              </div>
              <div className="demoPage">
                <img
                  className="portafolio-imagen"
                  src={Servicios_pag3}
                  alt="Portada del Portafolio"
                />
              </div>
              <div className="demoPage">
                <img
                  className="portafolio-imagen"
                  src={Servicios_pag4}
                  alt="Portada del Portafolio"
                />
              </div>
              <div className="demoPage">
                <img
                  className="portafolio-imagen"
                  src={Clientes}
                  alt="Portada del Portafolio"
                />
              </div>
              <div className="demoPage">
                <img
                  className="portafolio-imagen"
                  src={Clientes_pag1}
                  alt="Portada del Portafolio"
                />
              </div>
              <div className="demoPage">
                <img
                  className="portafolio-imagen"
                  src={Clientes_pag2}
                  alt="Portada del Portafolio"
                />
              </div>
              <div className="demoPage">
                <img
                  className="portafolio-imagen"
                  src={QR}
                  alt="Portada del Portafolio"
                />
              </div>
          </HTMLFlipBook>
      </div>
       {/* <DemoBlock /> */}
    </div>
  );
}