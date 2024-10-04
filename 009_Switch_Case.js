const diaSemana = 'sexta'

//if (diaSemana == 'segunda') {
//  console.log('Hoje tem aula do SESI)
//}

switch(diaSemana) {
    case 'segunda':
    case 'terça':
    case 'quarta':
        console.log('Hoje tem aula do SESI')
        break    
    case 'quinta':
    case 'sexta':
        console.log('Hoje tem aula do SENAI uhuu!! 😀')
        break
    case 'sábado':
        console.log('Que pena hoje é sábado :/ ☹')
        break
    case 'domingo':
        console.log('Bora descansar que aula de novo')
        break
    default :
        console.log ('Dia inválido')
}