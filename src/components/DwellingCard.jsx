import Badge from "./ui/Badge";
import Specs from "./ui/Specs";
import Rent from "./ui/Rent";
import Card from "./ui/Card";
import EnergyBadge from "./ui/EnergyBadge";

function DwellingCard({ dwelling, variante = "rejilla" }) {
  return (
    <Card>
      <Badge dwelling={dwelling} />
      <Specs dwelling={dwelling} />
      <Rent dwelling={dwelling} />
      <EnergyBadge dwelling={dwelling} />
    </Card>
  );
}

export default DwellingCard;