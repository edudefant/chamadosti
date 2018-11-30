const moongoose = require('mongoose')
const Schema = moongoose.Schema

const Schema = new Schema({
    descricao: String,
    data: Date,
    arquivo: String
})

module.exports = moongoose.model("Chamado", chamadoSchema)