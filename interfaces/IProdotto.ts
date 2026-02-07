import { Colore, statoProdotto, Taglia, tipoProdotto } from "../enum";
import { ICliente } from "./ICliente";

export interface IProdotto {
  tipo: tipoProdotto;
  readonly id: number;
  taglia: Taglia;
  colore: Colore;
  stato: statoProdotto;
  assegnaCliente(cliente: ICliente): void;
}
