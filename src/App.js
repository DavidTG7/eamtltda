import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

export const App = () => {
  return (
    <div id="bigBox">
      <div id="bigBox-app">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};
