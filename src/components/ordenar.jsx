function ordenar(lista, criterio) {
  if (criterio === "asc") return lista.sort((a, b) => (a.renta ?? 0) - (b.renta ?? 0));
  if (criterio === "desc") return lista.sort((a, b) => (b.renta ?? 0) - (a.renta ?? 0));
  return lista;
}
export default ordenar;