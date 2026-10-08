import DwellingCard from './DwellingCard';

function DwellingList({ dwellings }) {
  return (
    <div className="dwelling-list">
      {dwellings.map(vivienda => (
        <DwellingCard key={vivienda.id} dwelling={vivienda} />
      ))}
    </div>
  );
}
export default DwellingList;