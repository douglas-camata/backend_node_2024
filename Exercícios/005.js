const prompt = require('prompt-sync')()

const modoJogo = prompt('Selecione o modo do jogo: ')
switch (modoJogo) {
    case '1':
        console.log('Fácil');
        break;
    case '2':
        console.log('Médio');
        break;
    case '3':
        console.log('Difícil');
        break;
    case '4':
        console.log('Muito difícil');
        break;
    case '5':
        console.log('Insano');
        break;
    default :
        console.log('Modo de jogo não existe');
}