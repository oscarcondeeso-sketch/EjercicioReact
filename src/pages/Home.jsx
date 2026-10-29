import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";

function Home() {
  return (
    <>
      <title>Teitos · Portada</title>
      <Hero />
      <p>
        <Link to="/viviendas">Buscar vivienda</Link>{" "}
        <Link to="/convocatorias">Ver convocatorias</Link>
      </p>
    </>
  );
}

export default Home;
