module.exports = app => {
    app.get('/formulario_inclusao_noticia', (req, res) => {
        app.app.controllers.admin.formIncNoticia(app, req, res)
    })
    
    app.post('/noticias/salvar', (req, res) => {
        app.app.controllers.admin.salvarNoticia(app, req, res)
    })
}


