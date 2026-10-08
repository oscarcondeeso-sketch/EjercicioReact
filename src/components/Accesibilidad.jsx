function Accesibilidad({ accesibilidad }) {
  if (accesibilidad === "adaptada") return accesibilidad;
  else if (accesibilidad === "no_adaptada") return accesibilidad;
  else return "sin datos";
}
export default Accesibilidad;