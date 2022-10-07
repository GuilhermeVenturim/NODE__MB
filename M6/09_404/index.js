const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

const users = require('./users')

//Ler o body
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

//Arquivos estáticos
app.use(express.static('public'))

app.use('/users', users)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

//404
app.use(function(req, res, next) {
  res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
  console.log(`Server rodando na porta ${port}`)
})

