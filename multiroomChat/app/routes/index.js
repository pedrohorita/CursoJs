module.exports = server => {
    const index = (req, res) => { server.app.controllers.index.home(server, req, res)}
    server.get('/', index)
}