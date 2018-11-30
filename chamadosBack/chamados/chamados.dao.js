const db = require('../db/db')
const Chamado = require('./chamados.model')

module.exports = {
    salvar: (dados, fnCallback) => {
        db.connect()

        let f = new Chamado(dados)
        p.data = new Date();
        
        f.save((e, res) => {
            db.disconnect()
            fnCallback()
        })
    },

    listar: (fnCallback) => {
        db.connect()

        let q = Chamado.find()
        q.sort("-data")

        q.exec((e, res) => {
            db.disconnect()
            fnCallback(res)

        })
    }
}