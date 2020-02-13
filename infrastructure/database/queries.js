const conexao = require('../db_conection')

const executaQuery = (query) => {
  return new Promise((resolve, reject) => {
        conexao.query(query, (erro, resultados, campos) => {
        if (erro) {
            reject(erro) 
        } else {
            resolve(resultados) 
        }
      })
  })
  
  
}

module.exports = executaQuery