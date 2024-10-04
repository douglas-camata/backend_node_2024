const express = require('express')

const app = express()

const produtos = ['Notebook', 'Mouse', 'Teclado', 'Fone']

app.get('/', (req, res) => {
    res.send('Seja bem vindo!')
})

app.get('/produtos', (req, res) => {
    let html = '<ul>'
    for (let produtoSel of produtos) {
        html += `<li>${produtoSel}</li>`
    }    
    html = html + '</ul>'

    res.send(html)
})

app.get('/produto/:id', (req, res) => {
    const id = req.params.id
    const produtoSel = produtos[id]
    if (produtoSel == undefined) {
        res.send('Produto não encontrado')
    } else {
        res.send(`Produto selecionado ${produtoSel}`)
    }
})

app.get('/total/:produto/:preco/:qtde', (req, res) => {
    const idProduto = req.params.produto
    const preco = parseFloat(req.params.preco)
    const qtde = parseInt(req.params.qtde)

    const valorTotal = preco * qtde
    const produtoSel = produtos[idProduto]

    res.send(`
        Você comprou o produto ${produtoSel} que 
        custa R$ ${preco} e você comprou ${qtde} unidades
        <br>
        O valor total é R$ ${valorTotal}
        `)
})

app.get('/menu', (req, res) => {
    let html = `
        <h1>Menu </h1>
        <a href='/' > Principal </a> <br>
        <a href='/produtos' > Produtos </a> <br>
        <a href='/produto/1' > Produtos Específico </a> <br>
        <a href='/total/0/30/4' > Valor Total </a> <br>   
    `
    res.send(html)
})

const porta = 3000
app.listen(porta, () => {
    console.log(`Servidor em http://localhost:${porta}`)
})
