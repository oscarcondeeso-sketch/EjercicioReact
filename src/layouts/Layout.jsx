import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";


function Layout() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido" className="contenedor" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
