import { IProcessoProduzione } from "../interfaces/IProcessoProduzione";
import { IProdotto } from "../interfaces/IProdotto";
export declare class ProcessoProduzione implements IProcessoProduzione {
    nomeProcesso: string;
    descrizione: string;
    prodottiInProduzione: IProdotto[];
    constructor(nomeProcesso: string, descrizione: string);
    aggiungiProdotto(prodotto: IProdotto): void;
}
//# sourceMappingURL=ProcessoProduzione.d.ts.map