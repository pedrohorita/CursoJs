module.exports.getNoticias = (app, req, res) => {
    const conn = app.config.dbConnection()
    const noticia = new app.app.models.NoticiaDAO(conn)  

    const queryResult = (error, result) => {
        res.render('noticias/noticias', {noticias: result} )
    }
    noticia.getNoticias(queryResult)
}


module.exports.getNoticia = (app, req, res) => {
    const conn = app.config.dbConnection()
    const noticia = new app.app.models.NoticiaDAO(conn) 
    const id = req.query.id_noticia
    const queryResult = (error, result) => {
        res.render('noticias/noticia', {noticia: result} )
    }
    noticia.getNoticia(id, queryResult)
}