import { ICliente } from "../interfaces/ICliente";
import { IProdotto } from "../interfaces/IProdotto";

export class Cliente implements ICliente{
    nome: string;
    cognome: string;
    email: string;
    metodoDiPagamento: string;

    constructor(nome: string, cognome: string, email: string, metodoDiPagamento: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoDiPagamento = metodoDiPagamento;
    }

    ordinaProdotto(prodotto: IProdotto): void {
        console.log(`${this.nome} sta ordinando un prodotto`);
        prodotto.assegnaCliente(this);
    }
}