const { juros_simples, juros_composto } = require('./023_Modulo_Juros')
//const juros = require('./023_Modulo_Juros')
//const juros_simples = juros.juros_simples
//const juros_composto = juros.juros_composto

const resultado = juros_simples(1000, 4, 12)
console.log(resultado.jurosCalc)
console.log(resultado.valorTotal)
console.log(resultado.taxa)
console.log(resultado.tempo)

resultado = juros_composto(1000, 4, 12)
console.log(`Montante ${resultado.montante}`);
console.log(`Juros ${resultado.juros}`);

