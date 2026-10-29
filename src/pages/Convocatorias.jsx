import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar.jsx";
import ConvocatoriaList from "../components/ConvocatoriaList.jsx";
import convocatorias from "../../db.json";
import ordenar from "../components/ordenar.jsx";


function Convocatorias() {
  const [params, setParams] = useSearchParams();
  const texto =  params.get("provincia") ?? "";
  const [orden, setOrden] = useState("ninguno");
  const [vista, setVista] = useState("rejilla");


  const provincia = texto.trim().toLowerCase();
  const filtradas = convocatorias.convocatorias.filter((c) =>
    [c.id, c.provincia, c.referencia].some((d) =>
      String(d).toLowerCase().includes(provincia),
    ),
  );

  const ordenadas = ordenar(filtradas, orden);

  function cambiarBusqueda(valor) {
    setParams(
      (anteriores) => {
        const nuevos = new URLSearchParams(anteriores);
        if (valor) nuevos.set("provincia", valor);
        else nuevos.delete("provincia");
        return nuevos;
      },
      { replace: true },
    );
  }

  return (
    <>
      <title>Buscar convocatoria · Teitos</title>
      <SearchBar
        busqueda={texto}
        onBusqueda={cambiarBusqueda}
        orden={orden}
        onOrden={setOrden}
        total={ordenadas.length}
        vista={vista}
        onVista={setVista}
      />
      <ConvocatoriaList dwellings={ordenadas} vista={vista} />
    </>
  );
}

export default Convocatorias;
