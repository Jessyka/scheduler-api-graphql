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

const resolvers = {
  Query: {
      status: () => "Servidor rodando!" 
  },

  Mutation: {
      adicionarCliente: (root, params) => Clientes.adicionarCliente(params)
  }
}

const server = new GraphQLServer({
    resolvers,
    typeDefs: './config/schema.graphql'
})

server.start(() => {
  console.log('Servidor rodando na porta 4000')
})