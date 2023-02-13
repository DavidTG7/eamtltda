import "./portafolio.css";
import React, { useEffect, useState } from 'react';
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

// Nominacion de clases: BEM Block Element Modifier

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <h2 className="page-header">Page header - {props.number}</h2>
        <div className="page-image"></div>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});

class DemoBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      totalPage: 0,
    };
  }

  nextButtonClick = () => {
    this.flipBook.getPageFlip().flipNext();
  };

  prevButtonClick = () => {
    this.flipBook.getPageFlip().flipPrev();
  };

  onPage = (e) => {
    this.setState({
      page: e.data,
    });
  };

  componentDidMount() {
    this.setState({
      totalPage: this.flipBook.getPageFlip().getPageCount(),
    });
  }

  render() {
    return (
      <div>
        <HTMLFlipBook
          width={550}
          height={733}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={this.onPage}
          onChangeOrientation={this.onChangeOrientation}
          onChangeState={this.onChangeState}
          className="demo-book"
          ref={(el) => (this.flipBook = el)}
        >

          <PageCover>BOOK TITLE</PageCover>
          <Page number={1}>Lorem ipsum...</Page>
          <Page number={2}>Lorem ipsum...</Page>
          /*...*/
          <PageCover>THE END</PageCover>

        </HTMLFlipBook>

        <div className="container">
          <div>

            <button type="button" onClick={this.prevButtonClick}>
              Previous page
            </button>

            [<span>{this.state.page}</span> of
             <span>{this.state.totalPage}</span>]

            <button type="button" onClick={this.nextButtonClick}>
              Next page
            </button>

          </div>
          <div>

            State: <i>{this.state.state}</i>, orientation: <i>{this.state.orientation}</i>

          </div>
        </div>
      </div>
    );
  }
}



const screenSideGenerator = ()=>{
  const screen = window.screen.width;
  return screen;
}




// import DemoBlock from './appPortafolio'
export const Portafolio = () => {
  const[screenSize,setScreenSize] = useState("");
  const[rendering,setRendering] = useState(true);
  useEffect(() =>{
      setRendering(false);
      const newSize = screenSideGenerator();
      setScreenSize(newSize);
      setRendering(true);

  },[screenSize]);
  console.log(screenSize);



//   const [width, setWidth] = useState(window.innerWidth);
//   const [height, setHeight] = useState(window.innerHeight);
//   useEffect(() => {
//     const handleResize = () => {
//       setTimeout(() => {
//         setWidth(window.innerWidth);
//         setHeight(window.innerHeight);
//       }, 100);
//   };
//   window.addEventListener("resize", handleResize);
//   return () => {
//     window.removeEventListener("resize", handleResize);
//   };
// }, []);

// console.log({width,height});
  return (
    <>
    {rendering && <div id="portafolio" className="portafolio ancla" >
      <h3>PORTAFOLIO</h3>
       <hr />
        <HTMLFlipBook width={screenSize} height={500}>
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
      {/* </div> */}
    </div>}
    </>
  );
}