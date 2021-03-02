module.exports.formIncNoticia = (app, req, res) => {
    res.render('admin/form_add_noticia', {validacao: {}, noticia: {}})
}

module.exports.salvarNoticia = (app, req, res) => {
    const body = req.body
    req.assert('titulo', 'Título é obrigatório').notEmpty()
    req.assert('resumo', 'Resumo é obrigatório').notEmpty()
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100)
    req.assert('autor', 'Autor é obrigatório').notEmpty()
    req.assert('data_noticia', 'Data é obrigatório').notEmpty()//.isDate({ format: 'YYYY-MM-DD' })
    req.assert('noticia', 'Notícia é obrigatório').notEmpty()

    let erros = req.validationErrors()
    if(erros) {
        res.render('admin/form_add_noticia', {validacao: erros, noticia: body})
        return;
    }

    const conn = app.config.dbConnection()
    const NoticiaDAO = new app.app.models.NoticiaDAO(conn)
    const redirect = (error, result) => {
        res.redirect('/noticias')
    }

    NoticiaDAO.saveNoticia(body, redirect)
}