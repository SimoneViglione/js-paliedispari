const parolaUtente = prompt('Inserisci una parola');

function verificaPalindromo(parolaUtente) {

  for (let i = 0; i < parolaUtente.length / 2; i++) {

    if (parolaUtente[i] !== parolaUtente[parolaUtente.length - 1 - i]) {
      return parolaUtente + ' non è un palindromo';
    }
  }
  return parolaUtente + ' è un palindromo';
}

const risultato = verificaPalindromo(parolaUtente);
console.log(risultato);

