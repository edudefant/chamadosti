const express = require('express')

const wsChamados = require('./chamados/chamados.ws')
const wsUsuarios = require('./usuarios/usuarios.ws')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    
    next()
});

wsChamados(app)
wsUsuarios(app)

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000")
})