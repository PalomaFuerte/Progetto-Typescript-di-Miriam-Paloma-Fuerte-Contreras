import { IProdotto } from "./IProdotto";

export interface ICliente{
    nome: string;
    cognome: string;
    email: string;
    metodoDiPagamento: string;

    ordinaProdotto(prodotto: IProdotto): void;
}