const variavelGlobal = 'Sou global'

function minhaFuncao() {
    const variavelLocal = 'Sou local'
    console.log(variavelGlobal)
    console.log(variavelLocal)
}

minhaFuncao()

console.log(variavelGlobal)
console.log(variavelLocal) 
//Erro variavelLocal não está definida pois sua declaração 
//é dentro de uma função