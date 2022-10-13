const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

const app = express()

//Midleware para capturar o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000)

