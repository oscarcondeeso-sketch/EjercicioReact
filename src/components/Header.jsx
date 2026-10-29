import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="cabecera">
      <div className="contenedor">
        <h1>Teitos</h1>
        <p>Portal de alquiler público asequible</p>
        <nav aria-label="Principal" className="menu">
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/viviendas">Buscar vivienda</NavLink>
          <NavLink to="/convocatorias">Convocatorias</NavLink>
        </nav>
      </div>
    </header>
  );
}
export default Header;