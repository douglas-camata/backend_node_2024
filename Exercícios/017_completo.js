const soma = (v1, v2) => console.log(v1 + v2)
soma(5, 6)

const subtracao = (v1, v2) => console.log(v1 - v2)
subtracao(2, 8)

const divisao = (v1, v2) => console.log(v1 / v2)
divisao(5, 10)

const multiplicacao = (v1, v2) => console.log(v1 * v2);
multiplicacao(6, 12)

const conta = (v1, v2, opr) => {
    v1 = parseFloat(v1)
    v2 = parseFloat(v2)
    if (opr == '+') {
        soma(v1, v2)
        
    } else if (opr == '-') {
        subtracao(v1, v2)
        
    } else if (opr == '/'){
        divisao(v1, v2)
        
    } else if (opr == '*'){
        multiplicacao(v1, v2)
        
    }
}

const prompt = require('prompt-sync')()

const nr1 = prompt('Digite um número: ')
const nr2 = prompt('Digite outro número: ')
const opr = prompt('Digite um Operador: ')

conta(nr1, nr2, opr)



