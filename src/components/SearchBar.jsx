import { Button } from "@mui/material";

function SearchBar({ busqueda, onBusqueda, orden, onOrden, total, vista, onVista, convocatoria, onConvocatoria, convocatorias, provincias, onProvincia, provincia }) {
  return (
    <div className="search-bar">
      <input
        list="lista-provincias"
        placeholder="Provincia"
        value={provincia}
        onChange={(e) => onProvincia(e.target.value)}
      />
      <datalist id="lista-provincias">
        {provincias.map((p) => (
          <option key={p} value={p} />
        ))}
      </datalist>

      <select value={orden} onChange={(e) => onOrden(e.target.value)}>
        <option value="ninguno">Sin ordenar</option>
        <option value="asc">Renta: menor a mayor</option>
        <option value="desc">Renta: mayor a menor</option>
      </select>

      <select value={convocatoria} onChange={(e) => onConvocatoria(e.target.value)}>
        <option value="">Todas las convocatorias</option>
          {convocatorias.map((c) => (
            <option key={c.id} value={c.id}>
              {c.codigo}
            </option>
          ))}
      </select>

      <Button type="button" variant="contained" className={vista === "lista" ? "active" : ""} onClick={() => onVista("rejilla")} > Rejilla </Button>
      <Button type="button" variant="contained" className={vista === "rejilla" ? "active" : ""} onClick={() => onVista("lista")}> Lista </Button>

      <p className="result-count">
        {total} {total === 1 ? 'resultado encontrado' : 'resultados encontrados'}
      </p>
    </div>
  );
}

export default SearchBar;