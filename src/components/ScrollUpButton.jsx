import { useState } from "react";
import upArrow from "../imagenes/upArrow.svg";

export const ScrollUpButton = () => {
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
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      id="scrollUP"
      style={{ ...styles, transform: visible ? "scale(1)" : "scale(0)" }}
      onClick={scrollToTop}
    >
      <img
        src={upArrow}
        alt="upArrow"
        style={{
          filter: "invert(100%) url(#color-filter)",
          width: "30px",
        }}
      />
    </div>
  );
};

const styles = {
  position: "fixed",
  zIndex: "1",
  display: "grid",
  placeItems: "center",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  background: "#2da5f0",
  bottom: "10px",
  right: "10px",
  cursor: "pointer",
  boxShadow: "0 0 20px black",
  transition: ".3s",
};
