const express = require('express')
const ws = require('./chamados/chamados.ws')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

    next()
});

ws(app)


app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000")
})
