//Arrow function para calcular juros simples
const juros_simples = (capital, taxa, tempo) => {
    const juros = capital * (taxa / 100) * tempo
    const total = juros + capital
    return { 
        //chave   : valor
        jurosCalc : juros, 
        valorTotal : total,
        taxa : taxa,
        tempo : tempo
    }
}

const juros_composto = (capital, taxa, tempo) => {
    const m = capital * (1 + taxa / 100) ** tempo
    return {
        montante : m,
        juros : m - capital,
        taxa: taxa,
        tempo: tempo
    }
}

module.exports = { juros_simples, juros_composto }