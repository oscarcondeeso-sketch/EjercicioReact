function Badge({ dwelling }) {
  return (
    <div className={`badge ${dwelling.adjudicada ? 'adjudicada' : 'disponible'}`}>
      {dwelling.adjudicada ? 'Adjudicada' : 'Disponible'}
    </div>
  );
}
export default Badge;