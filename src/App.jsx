import { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import SearchBar from "./components/SearchBar.jsx";
import DwellingList from "./components/DwellingList.jsx";
import viviendas from "./db.json";
import ordenar from "./components/ordenar.jsx";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [orden, setOrden] = useState("ninguno");
  const [vista, setVista] = useState("rejilla");

  const q = busqueda.trim().toLowerCase();
  const filtradas = viviendas.viviendas.filter((v) =>
    [v.municipio, v.provincia, v.referencia].some((c) =>
      String(c).toLowerCase().includes(q),
    ),
  );

  const ordenadas = ordenar(filtradas, orden);

  return (
    <>
      <Header />
      <Hero />
      <main className="contenedor">
        <SearchBar
          busqueda={busqueda}
          onBusqueda={setBusqueda}
          orden={orden}
          onOrden={setOrden}
          total={ordenadas.length}
          vista={vista}
          onVista={setVista}
        />
        <DwellingList dwellings={ordenadas} vista={vista} />
      </main>
      <Footer />
    </>
  );
}

export default App;