const mongoose = require('mongoose')
const Schema = mongoose.Schema

var schemaUsuario = new Schema({
    nome : String,
    email : String,
    setor : String
})

module.exports = mongoose.model("Chamados", schemaChamados)