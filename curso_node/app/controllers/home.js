module.exports.index = (app, req, res) => {
    const conn = app.config.dbConnection()
    const noMod = new app.app.models.NoticiaDAO(conn)

    const render = (error, result) => {
        res.render('home/index', {noticias: result})
    }
    noMod.getLastNews(5, render)

    
}