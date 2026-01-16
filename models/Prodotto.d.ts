import { ICliente } from "../interfaces/ICliente";
import { IProdotto } from "../interfaces/IProdotto";
export declare class Prodotto implements IProdotto {
    tipo: "Costume da bagno" | "Pareo" | "Cappello" | "Ciabatte";
    readonly id: number;
    taglia: string;
    colore: string;
    stato: "disponibile" | "esaurito";
    private cliente?;
    constructor(tipo: "Costume da bagno" | "Pareo" | "Cappello" | "Ciabatte", id: number, taglia: string, colore: string);
    assegnaCliente(cliente: ICliente): void;
}
//# sourceMappingURL=Prodotto.d.ts.map