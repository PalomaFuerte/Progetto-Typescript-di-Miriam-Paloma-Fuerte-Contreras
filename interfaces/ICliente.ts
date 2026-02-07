import { metodoPagamento } from "../enum";
import { IProdotto } from "./IProdotto";

export interface ICliente {
  nome: string;
  cognome: string;
  email: string;
  metodoDiPagamento: metodoPagamento;
  ordinaProdotto(prodotto: IProdotto): void;
}
