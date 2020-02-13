class Tabelas {
    init(conexao) {
      this.conexao = conexao
      this.criaClientes()
      this.criaAtendimentos()
  
      console.log('tabelas criadas!')
    }
  
    criaClientes() {
      const sql = 'CREATE TABLE IF NOT EXISTS Clientes (id int NOT NULL AUTO_INCREMENT, nome varchar(150) NOT NULL, cpf char(11) NOT NULL, PRIMARY KEY (id));'
  
      this.criaTabela(sql)
    }
  
    criaAtendimentos() {
      const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id));'
  
      this.criaTabela(sql)
    }
  
    criaTabela(sql) {
      this.conexao.query(sql, erro => {
        if(erro) {
          console.log(erro)
        }
      })
    }
  }
  
  
  
  module.exports = new Tabelas