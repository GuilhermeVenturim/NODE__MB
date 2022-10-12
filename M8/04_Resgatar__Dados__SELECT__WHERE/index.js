const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

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

//Insere valores no banco de dados Mysql
app.post('/books/insertbook', (req, res) => {

    const title = req.body.title
    const pageqty = req.body.pageqty

    const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`
    
    conn.query(sql, function(err) {
        if (err) {
            console.log(err)
            return
        }
    //Redireciona par a home
        res.redirect('/books')
    })
})

////Imprime na tela os valores no banco de dados Mysql
app.get('/books', (req, res) => {
    const sql = 'SELECT * FROM books'
    
    conn.query(sql, function(err, data) {
        if (err) {
            console.log(err)
            return
        }

        const books = data
        console.log(books)
        res.render('books', { books })
    })
})

//Busca no banco de dados um valor(es), e se existir, exibe na view.
app.get('/books/:id', (req, res) => {
    //Captura o parâmetro da url pelo id
    const id = req.params.id
    //Filtro para busca por id
    const sql = `SELECT * FROM books WHERE id = ${id}`

    conn.query(sql, function(err, data) {
        if (err) {
            console.log(err)
            return
        }
        //Ao buscar os dados, retornam como string, e por isso começa com index 0
        const book = data[0]

        res.render('book', { book })
    })

})

// Config para conexão com banco de dados Mysql
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

conn.connect(function(err) {

    if(err) {
        console.log(err)
    }

    console.log('Conectado ao Mysql.')

    app.listen(3000)
})

