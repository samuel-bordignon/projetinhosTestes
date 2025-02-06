const express = require('express')
const app = express()

app.use(express.json())


var veiculos = []

app.get('/carrinhos', (req, res) => {
    res.json(veiculos)
})

app.get('/carrinhos/:id', (req, res) => {
    const { id } = req.params
    const veiculo = veiculos.find(v => v.id == id)
    if (!veiculo) {
        console.log('que paia')
        return veiculo
    }
    console.log('que legaaaal')
    res.json(veiculo)
})

app.listen(3000, () => {
    console.log('ai que legal, o servidor ta rodando na porta 3000')
})