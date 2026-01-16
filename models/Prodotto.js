"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prodotto = void 0;
const ICliente_1 = require("../interfaces/ICliente");
const IProdotto_1 = require("../interfaces/IProdotto");
class Prodotto {
    constructor(tipo, id, taglia, colore) {
        this.tipo = tipo;
        this.id = id;
        this.taglia = taglia;
        this.colore = colore;
        this.stato = "disponibile";
    }
    assegnaCliente(cliente) {
        if (this.stato === "esaurito") {
            console.log("Prodotto non disponibile");
            return;
        }
        this.cliente = cliente;
        this.stato = "esaurito";
        console.log(`Prodotto ${this.id} assegnato a ${cliente.nome}`);
    }
}
exports.Prodotto = Prodotto;
//# sourceMappingURL=Prodotto.js.map