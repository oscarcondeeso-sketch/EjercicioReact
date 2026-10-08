import { Button } from "@mui/material";


function SearchBar({ busqueda, onBusqueda, orden, onOrden, total, vista, onVista }) {
  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder="Buscar por municipio, provincia o referencia..."
        value={busqueda}
        onChange={(e) => onBusqueda(e.target.value)}
      />

      <select value={orden} onChange={(e) => onOrden(e.target.value)}>
        <option value="ninguno">Sin ordenar</option>
        <option value="asc">Renta: menor a mayor</option>
        <option value="desc">Renta: mayor a menor</option>
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