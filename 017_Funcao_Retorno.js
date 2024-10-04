function calcularComissao(valorVenda, percComissao){
    percComissao = percComissao / 100
    const comissaoTotal = valorVenda * percComissao
    return comissaoTotal
    //Tudo que colocar depois do return NÃO será executado
    console.log(comissaoTotal) 
}

let comissao = calcularComissao(1000, 25)
console.log(comissao.toFixed(3)) //250.000

comissao = calcularComissao(80000, 7)
console.log(comissao.toFixed(2))  //5600.00

console.log(calcularComissao(5500, 10))