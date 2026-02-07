import { metodoPagamento } from "../enum";
import { ICliente } from "../interfaces/ICliente";
import { IProdotto } from "../interfaces/IProdotto";

export class Cliente implements ICliente {
  nome: string;
  cognome: string;
  email: string;
  metodoDiPagamento: metodoPagamento;

  constructor(
    nome: string,
    cognome: string,
    email: string,
    metodoDiPagamento: metodoPagamento,
  ) {
    if (!nome || !cognome) {
      throw new Error("Nome e cognome obbligatori");
    }

    if (!email.includes("@")) {
      throw new Error("Email non valida");
    }

    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.metodoDiPagamento = metodoDiPagamento;
  }

  ordinaProdotto(prodotto: IProdotto): void {
    prodotto.assegnaCliente(this);
  }
}
