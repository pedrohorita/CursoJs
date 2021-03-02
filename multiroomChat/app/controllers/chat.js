module.exports.iniciaChat = (server, req, res) => {
    const dForm = req.body
    req.assert('apelido', 'Nome ou apelido é obrigatório').notEmpty()
    req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 14 caracteres').len(3, 15)

    const erros = req.validationErrors()

    if(erros) {
        res.render('index', {validacao: erros})
    }

    server.get('ws').emit('msgToClient', {
        apelido: dForm.apelido,
        mensagem: ' acabou de entrar no chat'
    })

    res.render('chat', {data: dForm})
}