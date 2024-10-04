const prompt = require("prompt-sync")();

let somaNotas = 0;
let qtdeNotas = 0;
let notaDigitada = 0;
do {
  notaDigitada = parseFloat(prompt("Digite a nota: "));
  if (notaDigitada != -1) {
    qtdeNotas++;
    somaNotas = somaNotas + notaDigitada;
  }
} while (notaDigitada != -1);

let media = somaNotas / qtdeNotas;
console.log(media);
