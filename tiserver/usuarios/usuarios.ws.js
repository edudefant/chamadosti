const dao = require("./usuarios.dao")

module.exports = (app) => {

    app.route("/chamados/listar").get( (req, resp) => {
        dao.listar((result) => {
            resp.json(result)
        })
    })
}