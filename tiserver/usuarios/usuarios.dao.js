const db = require('../db/db')
const Usuario = require('./chamados.model')

module.exports = {

    listar : (p, fnCallback) => {
        db.connect()

        q.exec( (e, res) => {
            db.disconnect()
            fnCallback(res)
        })
    }
}