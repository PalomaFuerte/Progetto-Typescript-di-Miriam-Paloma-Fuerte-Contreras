import { ICliente } from "../interfaces/ICliente";
import { IProdotto } from "../interfaces/IProdotto";

export class Prodotto implements IProdotto {
    tipo: "Costume da bagno" | "Pareo" | "Cappello" | "Ciabatte";
    readonly id: number;
    taglia: string;
    colore: string;
    stato: "disponibile" | "esaurito";

    private cliente?: ICliente;

    constructor(tipo: "Costume da bagno" | "Pareo" | "Cappello" | "Ciabatte", id: number, taglia: string, colore: string) {
        this.tipo = tipo;
        this.id = id;
        this.taglia = taglia;
        this.colore = colore;
        this.stato = "disponibile";
    }

    assegnaCliente(cliente: ICliente): void {
        if (this.stato === "esaurito") {
            console.log("Prodotto non disponibile");
            return;
        }

        this.cliente = cliente;
        this.stato = "esaurito";
        console.log(`Prodotto ${this.id} assegnato a ${cliente.nome}`);
    }
}