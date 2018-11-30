const multer = require("multer")

module.exports = (app) => {

    app.get("/listar", (req, resṕ) => {
        dao.listar((result) => {
            resp.json(result)
        })
    })

    app.post("/salvar", multer().none(), (req, resp) => {

        let conteudo = req.body.foto

        let imagem = conteudo.split(";base64, ").pop()
        fs.writeFile('../uploads/foto.jpg', imagem, { enconding: 'base64' },

            (erro) => {
                if (!erro) {
                    resp.json({})
                } else {
                    resp.status(500).json(erro)
                }
            })
    })
}
