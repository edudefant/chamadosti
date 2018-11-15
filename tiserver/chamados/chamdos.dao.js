const db = require('../db/db')
const Chamados = require('./chamados.model')

module.exports = {

    salvar : (atv, fnCallback) => {
        db.connect();

        let a = new Chamados(atv)
        a.data = new Date()

        a.save( (e, res) => {
            db.disconnect()
            fnCallback()
        })
    },

    listar : (idUsuario, fnCallback) => {
        db.connect()

        let q = Chamados.find({ usuario : idUsuario })
        q.sort("-data")
        q.exec( (e, res) => {
            db.disconnect()
            fnCallback(res)
        })
    }

}