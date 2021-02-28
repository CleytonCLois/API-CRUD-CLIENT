const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'us-cdbr-east-03.cleardb.com',
    port: '3306',
    user: 'b40fa5026af7f0',
    password: 'f5513488',
    database: 'heroku_f612ed612a0f202'
})

module.exports = conexao