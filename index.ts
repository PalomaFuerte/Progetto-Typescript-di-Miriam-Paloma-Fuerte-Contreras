import { Prodotto } from "./models/Prodotto";
import { Cliente } from "./models/Cliente";
import { ProcessoProduzione } from "./models/ProcessoProduzione";

const costume = new Prodotto("Costume da bagno", 1, "S", "rosso");
const pareo = new Prodotto("Pareo", 2, "M", "blu");

const cliente1 = new Cliente("Paloma", "Fuerte", "fuerte@gmail.com", "carta di credito");
const cliente2 = new Cliente("Davide", "Rossi", "rossi@gmail.com", "applepay");

const processo1 = new ProcessoProduzione("Fusione e trasformazione in filato", "Le scaglie di plastica vengono fuse e trasformate in filati o fibre tessili.");
const processo2 = new ProcessoProduzione("Tintura sostenibile e preparazione del tessuto", "I filati vengono colorati con pigmenti ecologici e tessuti secondo standard sostenibili.");

processo1.aggiungiProdotto(costume);
processo2.aggiungiProdotto(pareo);

cliente1.ordinaProdotto(costume);
cliente2.ordinaProdotto(costume);

console.log(costume);
console.log(pareo);
console.log(processo1.prodottiInProduzione);
console.log(processo2.prodottiInProduzione);

