import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { useEffect, useState } from "react";

export const App = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <div id="bigBox">
        <div id="bigBox-app">
          <Header />
          <Main />

          <div
            id="scrollUP"
            style={{ ...styles, display: visible ? "inline" : "none" }}
          >
            <button onClick={scrollToTop}>UP</button>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

const styles = {
  position: "fixed",
  bottom: "10px",
  right: "10px",
  cursor: "pointer",
  color: "white",
  borderRadius: "50%",
  background: "cyan",
};
