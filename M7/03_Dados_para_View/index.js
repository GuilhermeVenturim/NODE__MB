const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//Rota home
app.get('/', (req, res) => {

    const user = {
        name: "Guilherme",
        surname: "Venturim",
        age: "31",
        profission: "Programador"
    }

    res.render('home', {user: user})
})

app.listen(3000, () => {
    console.log(`App rodando na porta 3000.`)
})




