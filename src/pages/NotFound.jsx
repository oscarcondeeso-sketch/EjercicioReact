import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <title>Página no encontrada · Teitos</title>
      <h2>Esta página no existe</h2>
      <Link to="/">Ir a la portada</Link>
    </>
  );
}

export default NotFound;
