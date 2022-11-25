import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
