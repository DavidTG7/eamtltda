import "./footer.css";

export const Footer = () => {
  return (
    <footer id="footer">
      <p>
        Developed by Cognitio Artifacts© 2023
        <br />
        EAMT LTDA
      </p>
      <div className="footer__contador">
        <img
          alt="contador de visitas"
          src="https://websmultimedia.com/contador-de-visitas.php?id=8421"
        />
      </div>
      <div className="footer__cubierta-contador" />
    </footer>
  );
};
