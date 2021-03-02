module.exports = app => {
    app.get('/noticia', (req, res) => {
        app.app.controllers.noticia.getNoticia(app, req, res)
    })

    app.get('/noticias', (req, res) => {
        app.app.controllers.noticia.getNoticias(app, req, res)
    })
}

