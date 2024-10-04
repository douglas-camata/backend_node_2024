console.log ((5 > 3) && (10 < 20)) // true
console.log ((5 > 3) && (10 > 20))  //false

const usuario = 'Ricardo'
const senha = 123
console.log ((usuario == 'Ricardo') && (senha == 123))  //true
console.log ((usuario == 'Ricardo') && (senha == 1234))  //false

console.log ((usuario == 'Ricardo') || (senha == 123))  //true  
console.log ((usuario == 'Ricardo') || (senha == 1234))  //true
console.log ((usuario == 'RicardoDias') || (senha == 1234))  //false

console.log(!(5 > 10)) 

let aprovado = false
aprovado = !aprovado
console.log(aprovado);

