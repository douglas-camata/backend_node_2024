const valorPI = require('./011_Module')

function calcularRaio(circunferencia) {
    const PI = valorPI()
    const raio = circunferencia / (2 * PI)
    return raio
    //return circunferencia / (2 * valorPI())
}

console.log(calcularRaio(20))