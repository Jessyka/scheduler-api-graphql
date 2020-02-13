const {HOST, PORT, USER, PASSWORD, DATABASE} = require('../credentials')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: HOST,
    port: PORT,
    user: USER,
    password: PASSWORD,
    database: DATABASE
})

module.exports = connection