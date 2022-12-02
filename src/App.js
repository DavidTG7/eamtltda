import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { useState } from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { ScrollUpButton } from "./components/ScrollUpButton";

export const App = () => {
  return (
    <>
      <div id="bigBox">
        <div id="bigBox-app">
          <ScrollUpButton />
          <Header />
          <Main />

          <Footer />
        </div>
      </div>
    </>
  );
};
