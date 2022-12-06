import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { PUBLIC_KEY } from "../../../helper/hiddenInfo";
import "./contacto.css";

export const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2cbrrth", "contact_form", form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result);
          if (result.status === 200) {
            alert("Mensaje enviado con exito!");
          }
        },
        (error) => {
          console.log(error.text);
          alert(
            "Hubo un problema en el envío del mensaje, por favor vuelve a intentarlo!"
          );
        }
      );
  };

  return (
    <section id="contacto">
      <div id="datos-contacto">
        <h2 id="datos-contacto-titulo">DATOS DE CONTACTO</h2>
      </div>
      <div id="divisor-contactos" />
      <form
        id="formulario-contacto"
        ref={form}
        onSubmit={sendEmail}
        style={styles}
      >
        <h2 id="titulo-contacto">FORMULARIO DE CONTACTO</h2>
        <label>Nombre completo:</label>
        <input type="text" name="from_name" required />
        <label>Email:</label>
        <input type="email" name="from_email" required />
        <label>Mensaje:</label>
        <textarea name="message" rows="5" required />
        <input type="submit" value="ENVIAR" />
      </form>
    </section>
  );
};

const styles = {
  // background: "lightgreen",
  display: "flex",
  flexFlow: "column",
  gap: "10px",
};
