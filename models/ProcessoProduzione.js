"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessoProduzione = void 0;
const IProcessoProduzione_1 = require("../interfaces/IProcessoProduzione");
const IProdotto_1 = require("../interfaces/IProdotto");
class ProcessoProduzione {
    constructor(nomeProcesso, descrizione) {
        this.prodottiInProduzione = [];
        this.nomeProcesso = nomeProcesso;
        this.descrizione = descrizione;
    }
    aggiungiProdotto(prodotto) {
        this.prodottiInProduzione.push(prodotto);
        console.log(`Il prodotto ${prodotto.id} e' stato aggiunto al processo`);
    }
}
exports.ProcessoProduzione = ProcessoProduzione;
//# sourceMappingURL=ProcessoProduzione.js.map