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
    filhos: {
        filho1: {nome: 'Jorge', idade: 15},
        filho2: 'Reinaldo Jr'
    }
    
}
console.log(funcionario.filhos.filho1);
console.log(funcionario.filhos.filho1.idade);

