
function SpecsCon({ dwelling }) {
  return (
    <div className="specs-con">
      <p>{dwelling.codigo}</p>
      <p>{dwelling.provincia}</p>
      <p>Estado: {dwelling.estado}</p>
      <p>Unidades: {dwelling.unidades} </p>
      <p>Renta desde: {dwelling.rentaDesde} €</p>
    </div>
  );
}
export default SpecsCon;