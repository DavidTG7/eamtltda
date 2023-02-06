import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import logo from "./logo.png" 

import "./header.css";

const Links = ({ setToggleMenu }) => {
  return (
    <ul>
      <li>
        <a onClick={() => setToggleMenu(false)} href="#empresa">
          Empresa
        </a>
      </li>
      <li>
        <a onClick={() => setToggleMenu(false)} href="#servicios">
          Servicios
        </a>
      </li>
      <li>
        <a onClick={() => setToggleMenu(false)} href="#clientes">
          Clientes
        </a>
      </li>
      <li>
        <a onClick={() => setToggleMenu(false)} href="#contacto">
          Contacto
        </a>
      </li>
      <li>
        <a onClick={() => setToggleMenu(false)} href="#portafolio">
          Portafolio
        </a>
      </li>
    </ul>
  );
};

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="eamt_flotante">
      <div className="eamt__navbar">
      <img src={logo} alt="logo-EAMT" />
        <div className="eamt__navbar-links">
          <Links />
        </div>
        <div className="eamt__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="fff"
              size="45"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenuLine
              color="fff"
              size="45"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="eamt__navbar-menu-links">
              <Links setToggleMenu={setToggleMenu} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
