//Função nomeada
function nomeSobrenome(nome, sobrenome){
    console.log(`${nome} ${sobrenome}`) 
}
nomeSobrenome ('Douglas', 'Camata')

//Função anônima
const nomeSobrenome2 = function (nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`) 
}

//Arrow Function
const nomeSobrenome3 = (nome, sobrenome) => {
    console.log(`${nome} ${sobrenome}`)
}