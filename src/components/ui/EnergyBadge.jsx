function EnergyBadge({ dwelling }) {
  if (!dwelling.eficiencia) return null;

  return (
    <div className="energy-badge">
      {dwelling.eficiencia}
    </div>
  );
}
export default EnergyBadge;