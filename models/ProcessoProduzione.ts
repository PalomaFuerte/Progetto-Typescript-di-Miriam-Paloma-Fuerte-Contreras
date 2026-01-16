import { IProcessoProduzione } from "../interfaces/IProcessoProduzione";
import { IProdotto } from "../interfaces/IProdotto";

export class ProcessoProduzione implements IProcessoProduzione {
    nomeProcesso: string;
    descrizione: string;
    prodottiInProduzione: IProdotto[] = [];

    constructor(nomeProcesso: string, descrizione: string) {
        this.nomeProcesso = nomeProcesso;
        this.descrizione = descrizione;
    }

    aggiungiProdotto(prodotto: IProdotto): void {
        this.prodottiInProduzione.push(prodotto);
        console.log(`Il prodotto ${prodotto.id} e' stato aggiunto al processo`);
    }
}
