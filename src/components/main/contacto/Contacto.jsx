import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { PUBLIC_KEY } from "../../../helper/hiddenInfo";

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
    <form id="contacto" ref={form} onSubmit={sendEmail} style={styles}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="ENVIAR" />
    </form>
  );
};

const styles = {
  background: "lightgreen",
  display: "flex",
  flexFlow: "column",
  gap: "10px",
};
