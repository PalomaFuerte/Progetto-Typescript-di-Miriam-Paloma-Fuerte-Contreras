import { ICliente } from "../interfaces/ICliente";
import { IProdotto } from "../interfaces/IProdotto";
export declare class Cliente implements ICliente {
    nome: string;
    cognome: string;
    email: string;
    metodoDiPagamento: string;
    constructor(nome: string, cognome: string, email: string, metodoDiPagamento: string);
    ordinaProdotto(prodotto: IProdotto): void;
}
//# sourceMappingURL=Cliente.d.ts.map