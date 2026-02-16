import { Prodotto } from "./models/Prodotto";
import { Cliente } from "./models/Cliente";
import { ProcessoProduzione } from "./models/ProcessoProduzione";
import { metodoPagamento, tipoProdotto, Taglia, Colore } from "./enum";

// Prodotti
const prodotti: Prodotto[] = [
  new Prodotto(tipoProdotto.costume, 1, Taglia.S, Colore.rosso),
  new Prodotto(tipoProdotto.pareo, 2, Taglia.M, Colore.blu),
  new Prodotto(tipoProdotto.cappello, 3, Taglia.L, Colore.giallo),
  new Prodotto(tipoProdotto.ciabatte, 4, Taglia.L, Colore.verde),
];

// Clienti
const clienti: Cliente[] = [
  new Cliente(
    "Paloma",
    "Fuerte",
    "paloma@gmail.com",
    metodoPagamento.cartaDiCredito,
  ),
  new Cliente("Davide", "Rossi", "davide@gmail.com", metodoPagamento.applepay),
  new Cliente("Lucia", "Bianchi", "lucia@gmail.com", metodoPagamento.paypal),
  new Cliente(
    "Marco",
    "Verdi",
    "marco@gmail.com",
    metodoPagamento.cartaDiCredito,
  ),
  new Cliente("Giulia", "Neri", "giulia@gmail.com", metodoPagamento.applepay),
];

// Processi
const processi: ProcessoProduzione[] = [
  new ProcessoProduzione(
    "Fusione e trasformazione in filato",
    "Le scaglie di plastica vengono fuse e trasformate in filati o fibre tessili.",
  ),
  new ProcessoProduzione(
    "Tintura sostenibile e preparazione del tessuto",
    "I filati vengono colorati con pigmenti ecologici e tessuti secondo standard sostenibili.",
  ),
];

// Assegnazione prodotti ai processi

// Sicuro: array creato con elementi già definiti, non può essere vuoto
try {
  processi[0]!.aggiungiProdotto(prodotti[0]!); // Prodotto 1 al processo 1
} catch (error) {
  const err = error instanceof Error ? error : new Error(String(error));
  console.log(err.message);
}

// Sicuro: array creato con elementi già definiti, non può essere vuoto
try {
  processi[1]!.aggiungiProdotto(prodotti[1]!); // Prodotto 2 al processo 2
  processi[1]!.aggiungiProdotto(prodotti[2]!); // Prodotto 3 al processo 2
} catch (error) {
  const err = error instanceof Error ? error : new Error(String(error));
  console.log(err.message);
}

// Funzione per ordinare prodotti
function ordina(cliente: Cliente, prodotto: Prodotto): void {
  try {
    cliente.ordinaProdotto(prodotto);
    console.log(
      `${cliente.nome} ha ordinato il prodotto ${prodotto.id} (${prodotto.tipo})`,
    );
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    console.log(`Ordine fallito per ${cliente.nome}: ${err.message}`);
  }
}

// Ordini
ordina(clienti[0]!, prodotti[0]!);
ordina(clienti[1]!, prodotti[0]!);
ordina(clienti[2]!, prodotti[1]!);
ordina(clienti[3]!, prodotti[2]!);
ordina(clienti[4]!, prodotti[2]!);

// Stato finale dei prodotti
console.log("\nStato finale dei prodotti:");
prodotti.forEach((p) =>
  console.log(`Prodotto ${p.id} (${p.tipo}): ${p.stato}`),
);

// Prodotti per processo
console.log("\nProdotti per processo:");
processi.forEach((proc, index) => {
  console.log(
    `Processo ${index + 1} (${proc.nomeProcesso}):`,
    proc.prodottiInProduzione.map((p) => p.id),
  );
});
