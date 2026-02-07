import { Colore, statoProdotto, Taglia, tipoProdotto } from "../enum";
import { ICliente } from "../interfaces/ICliente";
import { IProdotto } from "../interfaces/IProdotto";

export class Prodotto implements IProdotto {
  tipo: tipoProdotto;
  readonly id: number;
  taglia: Taglia;
  colore: Colore;
  stato: statoProdotto;

  private cliente?: ICliente;

  constructor(tipo: tipoProdotto, id: number, taglia: Taglia, colore: Colore) {
    if (id <= 0) {
      throw new Error("ID del prodotto non valido, deve essere positivo");
    }
    if (!Object.values(Taglia).includes(taglia)) {
      throw new Error("Taglia non valida");
    }
    if (!Object.values(Colore).includes(colore)) {
      throw new Error("Colore non valirdo");
    }

    this.tipo = tipo;
    this.id = id;
    this.taglia = taglia;
    this.colore = colore;
    this.stato = statoProdotto.disponibile;
  }

  assegnaCliente(cliente: ICliente): void {
    if (this.stato === statoProdotto.esaurito) {
      throw new Error("Prodotto esaurito");
    }

    this.cliente = cliente;
    this.stato = statoProdotto.esaurito;
  }

  getCliente(): ICliente | undefined {
    return this.cliente;
  }
}
