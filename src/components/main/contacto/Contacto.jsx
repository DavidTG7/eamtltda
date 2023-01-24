import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { PUBLIC_KEY } from "../../../helper/hiddenInfo";

import Lottie from "lottie-react";
import successful from "./successful.json";

import whatsapp from "./images/whatsapp.svg";
import phone from "./images/phone.svg";
import location from "./images/location.svg";
import email from "./images/email.svg";
import "./contacto.css";

export const Contacto = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useRef();
  let myTimeout;

  useEffect(() => {
    console.log("after setTimeout");
    clearTimeout(myTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_l92i7sr", "contact_form", form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result);
          if (result.status === 200) {
            setIsSuccess(true);
            myTimeout = setTimeout(() => {
              console.log("setTimeout");
              setIsSuccess(false);
            }, 4000);
            document.getElementById("formulario-contacto").reset();
          }
        },
        (error) => {
          console.error(error.text);
          alert(
            "Hubo un problema en el envío del mensaje, por favor vuelve a intentarlo!"
          );
        }
      );
  };

  const successMessage = (
    <div className="successMessage-box">
      <div className="lottie-container">
        <Lottie loop={false} animationData={successful} />
      </div>
    </div>
  );

  const selectOptions = [
    "Gestión de Riesgos",
    "Análisis de Seguridad",
    "Control de Acceso",
    "Políticas de Seguridad",
    "Incidentes de Seguridad",
    "Protección",
    "Personal de Seguridad",
    "Auditoría",
    "Procesos y Procedimientos",
    "SGC - SGCI",
    "Auditoría de Sistemas",
    "Software y Portales Web",
    "Planeación",
    "Redes",
    "Interventoría",
    "Administración de Sistemas",
    "Ciberseguridad",
    "Gobierno y Estrategia TI",
    "Otro",
  ];

  const selectOptionsRazon = [
    "Cotización",
    "Mensaje",
    "Felicitación",
    "Contacto"
  ];
  const allOptions = selectOptions.map((item, index) => <option key={`${item}-${index}`}>{item}</option>);

  const allOptionsRazon = selectOptionsRazon.map((item, index) => <option key={`${item}-${index}`}>{item}</option>);
  return (
    <section id="contacto">
      <div id="datos-contacto">
        <h2 id="datos-contacto-titulo">DATOS DE CONTACTO</h2>
        <ul id="datos-contacto-lista">
          <li>
            <img className="datos-icon" src={location} alt="location-icon" />
            <span>Calle 86 # 51A-61, Itagüí - Antioquia (COL) </span>
          </li>
          <li>
            <img className="datos-icon" src={phone} alt="phone-icon" />
            <span>3136473798 - 3128880345</span>
          </li>
          <li>
            <img className="datos-icon" src={email} alt="email-icon" />
            <span>gerenciaeamtltda@gmail.com</span>
          </li>
        </ul>
        <h3>Contáctanos por WhatsApp</h3>
        <a
          id="whatsapp-box"
          href="https://wa.me/+573136473798"
          target="_blank"
          rel="noreferrer"
        >
          <img className="datos-icon" src={whatsapp} alt="whatsapp-icon" />
        </a>
      </div>
      <div id="divisor-contactos" />
      <form id="formulario-contacto" ref={form} onSubmit={sendEmail}>
        {isSuccess ? successMessage : null}
        <h2 id="titulo-contacto">FORMULARIO DE CONTACTO</h2>
        <label>
          Nombre completo:
          <input type="text" name="from_name" required />
        </label>
        <label>
          Email:
          <input type="email" name="from_email" required />
        </label>
        <label>
          Teléfono o Celular:
          <input type="text" name="from_phone" required />
        </label>
        <label>
          Empresa:
          <input type="text" name="from_empresa" required />
        </label>
        <label>
          Cargo:
          <input type="text" name="from_cargo" required />
        </label>
        <label>
          Motivo de contacto:
          <select name="servicio" required>
            {allOptions}
          </select>
        </label>
        <label>
          Razón del contacto:
          <select name="razon" required>
            {allOptionsRazon}
          </select>
        </label>
        <label>
          Mensaje:
          <textarea name="message" rows="5" required />
        </label>
        <input type="submit" value={isSuccess ? "ENVIANDO..." : "ENVIAR"} />
      </form>
    </section>
  );
};
