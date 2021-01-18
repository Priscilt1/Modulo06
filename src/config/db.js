// conexão com o banco de dados

// o pool permite que acesse os dados sem precisar colocar o login toda hora, é tipo uma configuração que guarda a informacao que pode deixar o usuario acessar
const { Pool } = require("pg")

// credenciais do banco de dado
module.exports = new Pool({
    user:"priscilaribeiro",
    password:"",
    host: "localhost",
    port: 5432,
    database:"launchstoredb"
})