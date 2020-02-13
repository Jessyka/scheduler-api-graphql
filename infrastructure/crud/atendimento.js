const executaQuery = require('../database/queries')

class Atendimento {
  lista() {
    const sql = 'SELECT * FROM Atendimentos'

    return executaQuery(sql)
  }

  buscaPorId(id) {
    const sql = `SELECT * FROM Atendimentos WHERE id=${parseInt(id)}`

    return executaQuery(sql).then(atendimentos => atendimentos[0])
  }

  adiciona(item) {
    const dataCriacao = new Date()
    const data = moment(item.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

    const sql = `INSERT INTO Atendimentos(cliente, servico, data, dataCriacao, status, observacoes) VALUES(${item.cliente}, ${item.servico}, ${data}, '${dataCriacao}', '${item.status}', '${item.observacoes}')`

    return executaQuery(sql).then(resposta => {
      id: resposta.insertId,
      item
    })
  }

  atualiza(item) {
    const { cliente, servico, status, observacoes, id } = item
    const sql = `UPDATE Atendimentos SET cliente=${cliente}, servico=${servico}, status='${status}' observacoes='${observacoes}' WHERE id=${id}`
    
    return executaQuery(sql).then(() => item)
  }

  deleta(id) {
    const sql = `DELETE FROM Atendimentos WHERE id=${id}`

    return executaQuery(sql).then(() => id)
  }
}

module.exports = new Atendimento
