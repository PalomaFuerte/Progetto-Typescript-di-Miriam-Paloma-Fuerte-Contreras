import { statoProdotto } from "../enum";
import { IProcessoProduzione } from "../interfaces/IProcessoProduzione";
import { IProdotto } from "../interfaces/IProdotto";

export class ProcessoProduzione implements IProcessoProduzione {
  nomeProcesso: string;
  descrizione: string;
  prodottiInProduzione: IProdotto[] = [];

  constructor(nomeProcesso: string, descrizione: string) {
    if (!nomeProcesso || !descrizione) {
      throw new Error("Nome e descrizione del processo obbligatori");
    }

    this.nomeProcesso = nomeProcesso;
    this.descrizione = descrizione;
  }

  aggiungiProdotto(prodotto: IProdotto): void {
    if (this.prodottiInProduzione.includes(prodotto)) {
      throw new Error("Prodotto già presente nel processo");
    }
    if (prodotto.stato !== statoProdotto.disponibile) {
      throw new Error("Prodotto non disponibile per la produzione");
    }
    this.prodottiInProduzione.push(prodotto);
  }
}
