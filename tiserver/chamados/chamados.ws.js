const dao = require("./chamados.dao")

module.exports = (app) => {

    app.route("/chamados/salvar").post((req, resp) => {

        dao.salvar(req.body, () => {
            resp.json({})
        })
    })

    app.route("/chamados/listar/:chamado").get((req, resp) => {
        let idUsuario = req.params.usuario

        dao.listar(idUsuario, (result) => {
            resp.json(result)
        })
    })

}