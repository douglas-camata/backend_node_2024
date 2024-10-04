//Arrow Function com 1 parâmetro
const saudacao2 = (nome) => {
    console.log(nome)    
}
saudacao2('SENAI')

//Arrow Function com 2 parâmetro
const soma2 = (v1, v2) => {
    console.log(v1 + v2);    
}
soma2(3, 6)

//Arrow Function com 0 parâmetro
const bemvindo = () => {
    console.log('Bem-vindo ao curso de JavaScript!')
}
bemvindo()

//Quando temos apenas um linha no bloco de comando
//da função podemos dispensar o {} e o return
const multiplicacao = (v1, v2) => v1 * v2
multiplicacao(2, 5)
// const multiplicacao = (v1, v2) => {
//     return v1 * v2
// }

//Função nomeada
function bemVindo () {
    console.log('Bem-vindo')
}

//Função anônima
const bemVindo = function () {
    console.log('Bem-vindo')
}

//Arrow function
const bemVindo = () => {
    console.log('Bem-vindo')
}
bemvindo()








