const PI = function () {
    const valorPI = 3.1415
    return valorPI
}
const raioCirc = function (circunferencia) {
    const valorRaio = circunferencia / (2 * PI())
    return valorRaio
}

let RaioV = raioCirc(100)
console.log(RaioV.toFixed(2));


const PI2 = () => {
    const valorPI2 = 3.1415
    return valorPI2
}

const raioCirc2 = (circunferencia2) => {
    const valorRaio2 = circunferencia2 / (2 * PI2())
    return valorRaio2
}

let RaioV2 = raioCirc2(100)
console.log(RaioV2.toFixed(2));

