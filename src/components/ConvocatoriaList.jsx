import ConvocatoriaCard from './ConvocatoriaCard.jsx';

function ConvocatoriaList({ dwellings }) {
  return (
    <div className="ConvocatoriaList">
      {dwellings.map(convocatorias => (
        <ConvocatoriaCard key={convocatorias.id} dwelling={convocatorias} />
      ))}
    </div>
  );
}
export default ConvocatoriaList;