"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const ICliente_1 = require("../interfaces/ICliente");
const IProdotto_1 = require("../interfaces/IProdotto");
class Cliente {
    constructor(nome, cognome, email, metodoDiPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoDiPagamento = metodoDiPagamento;
    }
    ordinaProdotto(prodotto) {
        console.log(`${this.nome} sta ordinando un prodotto`);
        prodotto.assegnaCliente(this);
    }
}
exports.Cliente = Cliente;
//# sourceMappingURL=Cliente.js.map