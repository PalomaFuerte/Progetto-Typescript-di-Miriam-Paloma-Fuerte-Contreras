import { ICliente } from "./ICliente";

export interface IProdotto {
    tipo: string;
    readonly id: number;
    taglia: string;
    colore: string;
    stato: string;

    assegnaCliente(cliente: ICliente): void;
}

