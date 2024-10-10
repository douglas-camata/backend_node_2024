const express = require('express')
const ejs = require('ejs') 
const expressLayouts = require('express-ejs-layouts')
const path = require('path');

const app = express()


//Configurações
// Configura o diretório das views
app.set('views', path.join(__dirname, 'views'));
//Configura o motor de templates para EJS
app.set('view engine', 'ejs')  
//Configura a pasta para arquivos estáticos (css / img)
app.use(express.static(path.join(__dirname, 'public')));
//Definir que iremos utilizar um layout padrão
app.use(expressLayouts)
app.set('layout', 'layouts/principal')
//Para processar os dados do formulário configuramos:
app.use(express.urlencoded({ extended: true }))

//Rota da página principal do site
app.get('/', (req, res) => {
    //Renderiza (Carrega) o arquivo .ejs
    res.render('index')
})

app.get('/sobre', (req, res) => {
    res.render('sobre')
})

//Rota para exibir a tela do juros simples
app.get('/juros_simples', (req, res) => {
    res.render('juros_simples')
})

//Metodo POST do juros simples, para realizar o cálculo
app.post('/juros_simples', (req, res) => {
    //Obtendo os valores digitados na tela de juros simples
    const c = parseFloat(req.body.capital)
    const i = parseFloat(req.body.taxa)
    const t = parseFloat(req.body.tempo)

    const j = c * (i / 100) * t 
    const total = c + j
    
    //Renderizando a tela com os dados calculados
    res.render('juros_simples', { total, j, c, i, t } )
})

//Rota para exibir a tela do juros simples
app.get('/juros_composto', (req, res) => {
    res.render('juros_composto')
})

app.post('/juros_composto', (req, res) => {
    //Obtendo os valores digitados na tela de juros simples
    const c = parseFloat(req.body.capital)
    const i = parseFloat(req.body.taxa)
    const t = parseFloat(req.body.tempo)

    const m = c * (1 + (i / 100)) ** t 
    const j = m - c
    
    //Renderizando a tela com os dados calculados
    res.render('juros_composto', { m, j, c, i, t } )
})

const porta = 3000 //Porta onde o servidor vai rodar
app.listen(porta, () => {
    console.log(`Servidor http://localhost:${porta}`)
})