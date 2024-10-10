//Criando um objeto
let produto = {
//  chave: valor
    nome: 'Iphone',
    modelo: '14',
    valor: 3999.90,
    memoria: 256
}

let aluno = {
    nome : 'Douglas',
    idade : 36,
    nif: 1081582
}

//Acessando as chaves do objeto
console.log(produto.nome);    //Iphone
console.log(produto['nome']); //Iphone
console.log(produto.modelo);  //14
console.log(produto['valor']); //3999.90
console.log(produto.valor);    //3999.90
console.log(produto['memoria']); // 256

const nomeAluno = aluno.nome
const idadeAluno = aluno.idade

let valorProduto = produto.valor
valorProduto = valorProduto * 0.8
console.log(`Produto ${produto.nome} de ${produto.valor} por ${valorProduto}`);

//Alterando propriedades de um objeto
console.log(produto) //{ nome: 'Iphone', modelo: '14', valor: 3999.9, memoria: 256 }
produto.valor = 3890.00
console.log(produto) //{ nome: 'Iphone', modelo: '14', valor: 3890, memoria: 256 }
console.log(produto.valor); //3890

//Adicionar nova propriedade
produto.fabricante = 'Apple'
console.log(produto)

//Iterando sobre as chaves de um objeto
for (let chave in produto){
    console.log(`Na chave ${chave} tem o valor  ${produto[chave]}`);
}

//Objetos aninhados (Um objeto dentro do outro)
let funcionario = {
    nome: 'Reinaldo',
    idade: 30,
    salario: 5000.00,
    ativo: true,
    filhos: {
        filho1: 'Jorge',
        filho2: 'Reinaldo Jr',
    }    
}
console.log(funcionario.filhos.filho1);

aluno = {
    nome: 'Marta',
    idade: 10,
    turma: { 
        serie: '5º EF', 
        ano: 2024 
    },
    mae: {
        nome: 'Ana',
        celular: '18999999999'
    },
    amigos: [
        'Mario', 
        'Joana', 
        'Roberto'
    ],
    notas: [
        {disciplina: 'Matemática', nota: 8.5},
        {disciplina: 'Português', nota: 9.0}
    ]
}

console.log(aluno.idade);  //10
console.log(aluno.mae.nome); 
console.log(aluno.mae['nome']);
console.log(aluno.notas)
console.log(aluno.amigos);
console.log(aluno.amigos[0]);
console.log(aluno.notas[0].nota);

//Desestruturação de objetos
let colaborador = {
    nome: 'Maurício',
    salario: 5000.00,
    idade: 40,
    setor: 'RH',
}
//Atribuindo dados do objeto a variável da forma comum
let nomeColaborador = colaborador.nome
let salarioColaborador = colaborador['salario']
let idadeColaborador = colaborador.idade
let setorColaborador = colaborador.set

//Utilizando a desestruturação de objetos 
let { nome, salario, idade, setor } = colaborador

console.log(nomeColaborador);
console.log(nome);
console.log(salario);
console.log(idade);
console.log(setor);

console.log(colaborador);
console.log(JSON.stringify(colaborador));

//Utilizando o arquivo Json externo
const dadosJson = require('./022_Json.json');
console.log(dadosJson);
console.log(dadosJson.turma);

