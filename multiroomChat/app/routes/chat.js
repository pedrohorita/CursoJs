module.exports = server => {
    const chat = (req, res) => {
        server.app.controllers.chat.iniciaChat(server, req, res)
    }
    server.get('/chat', chat)

    server.post('/chat', chat)
}