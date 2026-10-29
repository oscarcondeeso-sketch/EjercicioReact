import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar.jsx";
import DwellingList from "../components/DwellingList.jsx";
import viviendas from "../../db.json";
import ordenar from "../components/ordenar.jsx";

function SearchDwellings() {
  const [params, setParams] = useSearchParams();
  const texto = params.get("q") ?? "";
  const [orden, setOrden] = useState("ninguno");
  const [vista, setVista] = useState("rejilla");
  const convocatoria = params.get("convocatoria") ?? "";
  const provincia = params.get("provincia") ?? "";

  const provincias = [...new Set(viviendas.convocatorias.map((c) => c.provincia))].sort();

  const convocatoriasDisponibles = viviendas.convocatorias.filter((c) =>
  c.provincia.toLowerCase().includes(provincia.trim().toLowerCase()),
);

  function cambiarParametro(nombre, valor) {
    setParams(
      (anteriores) => {
        const nuevos = new URLSearchParams(anteriores);
        if (valor) nuevos.set(nombre, valor);
        else nuevos.delete(nombre);
        return nuevos;
     },
      { replace: true },
    );
}

  const q = texto.trim().toLowerCase();
  const filtradas = viviendas.viviendas.filter((v) => {
  const coincideTexto = [v.municipio, v.provincia, v.referencia, v.dormitorios].some(
    (c) => String(c).toLowerCase().includes(q),
  );
  const coincideConvocatoria =
    convocatoria === "" || String(v.convocatoriaId) === convocatoria;
  const coincideProvincia = String(v.provincia)
  .toLowerCase()
  .includes(provincia.trim().toLowerCase());

  return coincideTexto && coincideConvocatoria && coincideProvincia;
});

  const ordenadas = ordenar(filtradas, orden);

  

  return (
    <>
      <title>Buscar vivienda · Teitos</title>
      <SearchBar
        provincia={provincia}
        onProvincia={(valor) => cambiarParametro("provincia", valor)}
        provincias={provincias}
        busqueda={texto}
        onBusqueda={(valor) => cambiarParametro("q", valor)}
        orden={orden}
        onOrden={setOrden}
        convocatoria={convocatoria}
        onConvocatoria={(valor) => cambiarParametro("convocatoria", valor)}
        convocatorias={convocatoriasDisponibles}
        total={ordenadas.length}
        vista={vista}
        onVista={setVista}
      />
      <DwellingList dwellings={ordenadas} vista={vista} />
    </>
  );
}

export default SearchDwellings;