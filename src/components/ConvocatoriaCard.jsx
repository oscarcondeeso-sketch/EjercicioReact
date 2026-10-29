import SpecsCon from "./ui/SpecsCon";
import Card from "./ui/Card";

function ConvocatoriaCard({ dwelling, variante = "rejilla" }) {
  return (
    <Card>
      <SpecsCon dwelling={dwelling} />
    </Card>
  );
}

export default ConvocatoriaCard;