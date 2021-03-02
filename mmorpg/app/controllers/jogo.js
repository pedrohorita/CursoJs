module.exports.jogo = (application, req, res) => {
    if(!req.session.authorized) {
        
        res.render('index', {
            validacao: [{
                param: 'usuario', 
                msg: 'É necessário realizar o login!'
            }], 
            dForm: {}})
        
    }

    let msg = ''
    if(req.query.msg != '') {
        msg = req.query.msg
    }

    const user = { 
        usuario: req.session.user,
        casa: req.session.casa,
        msg
    }

    const conn =  new application.config.dbConnection()

    const jogoDAO = new application.app.models.JogoDAO(conn)
    jogoDAO.iniciaJogo(user, res)
    
}

module.exports.sair = (application, req, res) => {
    req.session.destroy(() => {
        res.render('index', {validacao: {}, dForm: {}})    
    })
}


module.exports.suditos = (application, req, res) => {
    if(!req.session.authorized) {
        res.send('É necessário realizar o login!') 
    }
    res.render('aldeoes', {validacao: {}})    
}


module.exports.pergaminhos = (application, req, res) => {
    if(!req.session.authorized) {
        res.send('É necessário realizar o login!') 
    }

    const user = { 
        usuario: req.session.user,
        casa: req.session.casa
    }

    const conn =  new application.config.dbConnection()

    const jogoDAO = new application.app.models.JogoDAO(conn)
    jogoDAO.getAcoes(user, res)
    //res.render('pergaminhos', {validacao: {}})
}

module.exports.ordenar_acao_sudito = (application, req, res) => {
    if(!req.session.authorized) {        
        res.send('É necessário realizar o login!')        
    }

    const dForm = req.body

    req.assert('acao', 'Ação deve ser informada').notEmpty()
    req.assert('quantidade', 'Quantidade deve ser informada').notEmpty()

    const erros = req.validationErrors()

    if(erros) {
        res.redirect('jogo?msg=A')
        return
    }

    const conn =  new application.config.dbConnection()

    const jogoDAO = new application.app.models.JogoDAO(conn)
    dForm.usuario = req.session.user
    jogoDAO.acao(dForm)
    res.redirect('jogo?msg=B')
}


module.exports.revogaracao = (application, req, res) => {
    if(!req.session.authorized) {        
        res.send('É necessário realizar o login!')        
    }

    const id = req.query.id
    const conn =  new application.config.dbConnection()

    const jogoDAO = new application.app.models.JogoDAO(conn)
    jogoDAO.revogarAcao(id, res)
   
}