class Tabelas {
    init(conexao){
        this.conexao = conexao
        console.log('Tabelas foram chamadas')
        this.criarUsuarios()
    }

    criarUsuarios(){
        const sql = 'CREATE TABLE IF NOT EXISTS Usuarios (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, email varchar(50), dataCriacao datetime NOT NULL, data datetime NOT NULL, PRIMARY KEY(id))'
        this.conexao.query(sql, (erro)=>{
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela de usuarios criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas