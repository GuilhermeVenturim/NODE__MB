const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 5000

//Iniciando Handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//Iniciando static
app.use(express.static('public'))

const products = ["item 1", "item 2", "item 3"]
//Rota para items
app.get('/produtos/:id', (req, res) => {
    const id = req.params.id

    res.render('produtos', { products })
})


//Rota principal
app.get('/', (req, res) => {
    
    res.render('home', { products })
})


app.listen(port, () => {
    console.log(`App rodando na porta ${port}.`)
})







