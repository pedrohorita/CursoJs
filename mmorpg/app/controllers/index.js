module.exports.home = (application, req, res) => {
    res.render('index', {validacao: {}, dForm: {}})
}


module.exports.auth = (application, req, res) => {
    const dForm = req.body

    req.assert('usuario', 'Usuario não pode ser vazio').notEmpty()
    req.assert('senha', 'Senha não pode ser vazio').notEmpty()

    const erros = req.validationErrors()
    if(erros) {
        res.render('index', {validacao: erros, dForm})
        return
    }

    const conn =  new application.config.dbConnection()

    const userDAO = new application.app.models.UsuariosDAO(conn)
    userDAO.authUsuario(dForm, req, res)


}