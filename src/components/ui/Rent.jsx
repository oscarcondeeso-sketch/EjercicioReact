function Rent({ dwelling }) {
  return (
    <div className="rent">
      <p>{dwelling.renta ? `${dwelling.renta.toLocaleString('es-ES')} €/mes` : 'Sin datos'}</p>
    </div>
  );
}
export default Rent;