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
      .sendForm("service_2cbrrth", "contact_form", form.current, PUBLIC_KEY)
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
      <Lottie loop={false} animationData={successful} />
    </div>
  );

  return (
    <section id="contacto">
      {isSuccess ? successMessage : null}
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
            <img className="datos-icon" src={email} alt="phone-icon" />
            <span>juanjrodriguezperez@gmail.com</span>
          </li>
        </ul>
        <h4>Contáctanos por WhatsApp</h4>
        <a
          id="whatsapp-box"
          href="https://wa.me/+573006155805"
          target="_blank"
          rel="noreferrer"
        >
          <img className="datos-icon" src={whatsapp} alt="whatsapp-icon" />
        </a>
      </div>
      <div id="divisor-contactos" />
      <form id="formulario-contacto" ref={form} onSubmit={sendEmail}>
        <h2 id="titulo-contacto">FORMULARIO DE CONTACTO</h2>
        <label>Nombre completo:</label>
        <input type="text" name="from_name" required />
        <label>Email:</label>
        <input type="email" name="from_email" required />
        <label>Motivo de contacto:</label>
        <select name="servicio" required>
          <option>Servicio 1</option>
          <option>Servicio 2</option>
          <option>Servicio 3</option>
          <option>Servicio 4</option>
          <option>Servicio 5</option>
          <option>Otro</option>
        </select>
        <label>Mensaje:</label>
        <textarea name="message" rows="5" required />
        <input type="submit" value={isSuccess ? "ENVIANDO..." : "ENVIAR"} />
      </form>
    </section>
  );
};
