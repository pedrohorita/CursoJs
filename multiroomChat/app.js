const wsServer = require('socket.io')
const app = require('./config/server')
const port = 3030

const server = app.listen(port, () => {
    console.log(`Servidor online na porta ${port}`)
})

const ws = wsServer.listen(server)

app.set('ws', ws)

ws.on('connection', (socket) => {
    console.log('Connected ws')

    socket.on('disconnect', () => {
        console.log('Disconnected ws')
    })

    socket.on('msgToServer', data => {
        socket.emit('msgToClient', {
            apelido: data.apelido,
            mensagem: data.mensagem
        })

        socket.broadcast.emit('msgToClient', {
            apelido: data.apelido,
            mensagem: data.mensagem
        })

        if(parseInt(data.apelido_att_cli) === 0) {
            socket.emit('partToClient', {
                apelido: data.apelido            
            })

            socket.broadcast.emit('partToClient', {
                apelido: data.apelido
            })
        }
    })
})