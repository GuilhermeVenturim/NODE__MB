const express = require('express')
const exphbs = require('express-handlebars')
const pool = require('./db/conn')

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

    const sql = `INSERT INTO books (??, ??) VALUES (?, ?)`
    const data = ['title', 'pageqty', title, pageqty]
    
    pool.query(sql, data, function(err) {
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
    
    pool.query(sql, function(err, data) {
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
    const sql = `SELECT * FROM books WHERE ?? = ?`

    const data = ['id', id]

    pool.query(sql, data, function(err, data) {
        if (err) {
            console.log(err)
            return
        }
        //Ao buscar os dados, retornam como string, e por isso começa com index 0
        const book = data[0]

        res.render('book', { book })
    })

})

//Resgatar valores no banco de dados, exibir na view e em seguida, editar os valores apresentadas na view.
app.get('/books/edit/:id', (req, res) => {

    const id = req.params.id

    const sql = `SELECT * FROM books WHERE ?? = ?`

    const data = ['id', id]

    pool.query(sql, data, function(err, data) {
        if (err) {
            console.log(err)
            return
        }
        const book = data[0]

        res.render('editbook', {book})
    })
})

//Editar valores buscados no banco de dados atraves da view
app.post('/books/updatebook', (req, res) => {

    const id = req.body.id
    const title = req.body.title
    const pageqty = req.body.pageqty

    const sql = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`
    const data = ['title', title, 'pageqty', pageqty, 'id', id]

    pool.query(sql, data, function (err) {
        if (err) {
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})

//Remover valores buscados no banco de dados atraves da view
app.post('/books/remove/:id', (req, res) => {

    const id = req.params.id

    const sql = `DELETE FROM books WHERE id = ${id}`

    pool.query(sql, function (err) {

        if (err) {
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})


app.listen(3000)

