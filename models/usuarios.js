const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Usuario {
    adiciona(usuario, result) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(usuario.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const usuarioData = {...usuario, dataCriacao, data}

        const sql = 'INSERT INTO Usuarios SET ?'
    
        conexao.query(sql, usuarioData, (erro, resultado) => {
            if(erro){
                result.status(400).json(erro)
            }else{
                result.status(201).json(resultado)
            }
        })
    }

    lista(res){
        const sql = 'SELECT * FROM Usuarios'

        conexao.query(sql, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(201).json(resultado)
            }
        })
    }

    buscaPorId(id, res){
        const sql = `SELECT * FROM Usuarios WHERE id=${id}`

        conexao.query(sql, (erro, resultado) => {

            const usuario = resultado[0]
            
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(201).json(usuario)
            }
        })
    }

    alterar(id, valores, res) {
        const sql = 'UPDATE Usuarios SET ? WHERE id=?'

        if(valores.data){
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultados)
            }
        })
    }

    deletar(id, res){
        const sql = 'DELETE FROM Usuarios WHERE id=?'

        conexao.query(sql, id, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(201).json(resultado)
            }
        })
    }
}

module.exports = new Usuario