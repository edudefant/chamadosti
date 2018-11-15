const mongoose = require('mongoose')

const Schema = mongoose.Schema
const Type = mongoose.Schema.Types

var schemaChamados = new Schema({
    usuario: {
        type: Type.ObjectId,
        ref: 'Usuario'
    }
})

module.exports = mongoose.model("Chamados", schemaChamados)