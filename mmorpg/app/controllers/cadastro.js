module.exports.cadastro = (application, req, res) => {
    res.render('cadastro', {validacao: {}, dForm: {}});
}



module.exports.cadastrar = (application, req, res) => {

    const dForm = req.body

    req.assert('nome', 'Nome não pode ser vazio').notEmpty()
    req.assert('usuario', 'Usuario não pode ser vazio').notEmpty()
    req.assert('senha', 'Senha não pode ser vazio').notEmpty()
    req.assert('casa', 'Casa não pode ser vazio').notEmpty()

    const erros = req.validationErrors()

    if(erros) {
        res.render('cadastro', {validacao: erros, dForm})
        return
    }

    const conn =  new application.config.dbConnection()

    const userDAO = new application.app.models.UsuariosDAO(conn)
    const jogoDAO = new application.app.models.JogoDAO(conn)
    userDAO.inserirUsuario(dForm)
    jogoDAO.gerarParametros(dForm.usuario)
    userDAO.authUsuario({usuario: dForm.usuario, senha: dForm.senha}, req, res)
    //res.render('index', {validacao: {}, dForm: {}})
}