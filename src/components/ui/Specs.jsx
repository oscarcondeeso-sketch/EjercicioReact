import formatLocation from "../formatLocation";
import TheresElevator from "../TheresElevator";
import Accesibilidad from "../Accesibilidad";

function Specs({ dwelling }) {
  return (
    <div className="specs">
      <p>{dwelling.referencia ?? 'Sin referencia'}</p>
      <p>{formatLocation(dwelling.municipio, dwelling.provincia)}</p>
      <p>Tipología: {dwelling.tipologia}</p>
      <p>Superficie: {dwelling.superficie} m²</p>
      <p>Planta: {dwelling.planta}</p>
      <p>Ascensor: {TheresElevator({ ascensor: dwelling.ascensor })}</p>
      <p>Accesibilidad: {Accesibilidad({ accesibilidad: dwelling.accesibilidad })}</p>
    </div>
  );
}
export default Specs;