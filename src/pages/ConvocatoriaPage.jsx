import { useParams } from "react-router-dom";

function ConvocatoriaPage() {
  const { id } = useParams();
  return (
    <>
      <title>Ficha de convocatoria · Teitos</title>
      <h2>Ficha de la convocatoria {id}</h2>
    </>
  );
}

export default ConvocatoriaPage;
