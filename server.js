const { GraphQLServer } = require('graphql-yoga')
const conexao = require('./infrastructure/db_conection')
const Tabelas = require('./infrastructure/database/tables')
const Operacoes = require('./infrastructure/operations')

conexao.connect(erro => {
  if (erro) {
    console.log(erro)
  }

  console.log('conectou no banco')

  Tabelas.init(conexao)
})

const Clientes = new Operacoes('cliente')
const Atendimentos = new Operacoes('atendimento')

const resolvers = {
  Query: {
      status: () => "Servidor rodando!" ,
      clientes: () => Clientes.lista(),
      cliente: (root, { id }) => Clientes.buscaPorId(id),
      atendimentos: () => Atendimentos.lista()
  },

  Mutation: {
      adicionarCliente: (root, params) => Clientes.adicionarCliente(params),
      atualizaCliente: (root, params) => Clientes.atualiza(params),
      deletarCliente: (root, { id }) => Clientes.deleta(id)
  }
}

const server = new GraphQLServer({
    resolvers,
    typeDefs: './config/schema.graphql'
})

server.start(() => {
  console.log('Servidor rodando na porta 4000')
})