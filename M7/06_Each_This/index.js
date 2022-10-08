const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {

    const items = ["Item A", "Item B", "Item C"]
    res.render('dashboard', {items})
})

//Rota home
app.get('/', (req, res) => {

    const user = {
        name: "Guilherme",
        surname: "Venturim",
        age: "31",
        profission: "Programador"
    }

    const auth = false

    const approved = true

    res.render('home', {user: user, auth, approved})
})

app.listen(3000, () => {
    console.log(`App rodando na porta 3000.`)
})




