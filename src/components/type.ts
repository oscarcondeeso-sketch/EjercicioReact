export interface Vivienda {
  id: number;
  referencia?: string;
  municipio: string;
  provincia: string;
  tipologia?: string;
  superficie?: number;
  planta?: number;
  ascensor?: boolean;
  accesibilidad?: string;
  renta?: number;
  adjudicada?: boolean;
  eficiencia?: string;
}
