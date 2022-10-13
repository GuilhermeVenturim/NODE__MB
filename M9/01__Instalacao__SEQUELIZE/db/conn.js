const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('nodesequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectado com sucesso')
} catch (err) {
    console.log('Não foi possível estabelecer conexão com o banco de dados: ', error)
}

module.exports = sequelize
