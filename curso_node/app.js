const app = require('./config/server')
const port = 3003

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.`)
})

