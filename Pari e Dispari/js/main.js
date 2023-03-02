const pariDispariUtente = prompt("Su cosa vuoi puntare, pari o dispari?");
console.log(pariDispariUtente);

const numeroUtente = prompt("Immetti un valore compreso tra 1 e 5");
console.log(numeroUtente);

function generaNumero() {
    return Math.floor(Math.random() * 5) + 1;
}

const numeroSistema = generaNumero();
console.log(numeroSistema);

let somma = parseInt(numeroSistema) + parseInt(numeroUtente);
console.log(somma);

function pariDispari(numeroSistema, numeroUtente) {
    if (somma % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}

const risultato = pariDispari(numeroSistema, numeroUtente);
console.log(risultato);


if (pariDispariUtente == risultato) {
    console.log("Congratulazioni hai vinto!");
} else {
    console.log("Ha vinto il sistema, ritenta sarai più fortunato!");
}