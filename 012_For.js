//  (inicialização   ; condição    ; incremento
for (let contador = 0; contador < 5; contador++) {
    console.log(contador)
}

for (let contador = 10; contador > 0; contador--) {
    console.log(contador)
}

console.log('FIM');

//Tabuada
const numero = 8
for (let x = 0; x <= 10; x++) {
    let resultado = numero * x
    console.log(`${numero} x ${x} = ${resultado}`)
}
