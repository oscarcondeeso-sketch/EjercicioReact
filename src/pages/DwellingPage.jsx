import { useParams } from "react-router-dom";

function DwellingPage() {
  const { id } = useParams();
  return (
    <>
      <title>Ficha de vivienda · Teitos</title>
      <h2>Ficha de la vivienda {id}</h2>
    </>
  );
}

export default DwellingPage;
