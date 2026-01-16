import { IProdotto } from "./IProdotto";

export interface IProcessoProduzione{
    nomeProcesso: string;
    descrizione: string;
    prodottiInProduzione: IProdotto[];

    aggiungiProdotto(prodotto: IProdotto): void;
}