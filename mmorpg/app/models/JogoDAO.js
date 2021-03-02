const ObjectId = require('mongodb').ObjectID
class JogoDAO {
    constructor(conn) {
        this._conn = conn
    }
    
    gerarParametros(usuario){
        const insert = (db, callback) => {
            const collection = db.collection('jogo')
            collection.insert({
                usuario: usuario,
                moeda: 15,
                suditos: 10,
                temor: Math.floor(Math.random() * 1000),
                sabedoria: Math.floor(Math.random() * 1000),
                comercio: Math.floor(Math.random() * 1000),
                magia: Math.floor(Math.random() * 1000),
            })
        }

        this._conn.exec(insert)
    }

    iniciaJogo(usuario, res) {
        // console.log(usuario)
        const render =  (err, result) => {
            // console.log(result)
            res.render('jogo', {
                img_casa: usuario.casa, 
                jogo: result[0], 
                msg: usuario.msg})
        }

        const find = (db, callback) => {
            const collection = db.collection('jogo')
            collection.find({usuario: usuario.usuario}).toArray(render)
        }

        this._conn.exec(find)
    }

    acao(acao) {
        this._salvaAcao(acao)
        this._attParams(acao) 
    }

    _salvaAcao(acao) {
        const saveAction = (db, callback) => {
            const date = new Date()
            let tempo = 0
            switch(parseInt(acao.acao)) {
                case 1 : 
                    tempo = 1 * 60 * 60 * 1000
                    break
                case 2 : 
                    tempo = 2 * 60 * 60 * 1000
                    break
                case 3 : 
                    tempo = 5 * 60 * 60 * 1000 
                    break
                case 4 : 
                    tempo = 5 * 60 * 60 * 1000
                    break
            }
            const collection = db.collection('acao')
            acao.terminaEm = date.getTime() + tempo
            collection.insert(acao)
        }

        this._conn.exec(saveAction)
    }

    _attParams(acao) {
        const saveAction = (db, callback) => {
            let moedas = 0
            switch(parseInt(acao.acao)) {
                case 1 : 
                    moedas = -2 * acao.quantidade
                    break
                case 2 : 
                    moedas = -3 * acao.quantidade
                    break
                case 3 : 
                    moedas = -1 * acao.quantidade
                    break
                case 4 : 
                    moedas = -1 * acao.quantidade
                    break
            }
            const collection = db.collection('jogo')
            collection.update(
                {usuario: acao.usuario},
                {$inc: {moeda: moedas}}
            )
        }

        this._conn.exec(saveAction)
    }

    getAcoes(usuario, res) {
        const render =  (err, result) => {
            res.render('pergaminhos', {
                acoes: result})
        }

        const date = new Date()
        const getAcoes = (db, callback) => {
            const collection = db.collection('acao')
            collection.find({usuario: usuario.usuario, terminaEm: {$gt:date.getTime()}}).toArray(render)
        }

        this._conn.exec(getAcoes)
    }

    revogarAcao(id, res) {
        const redirect = (err, result) => {
            res.redirect('jogo?msg=D')
        }
        const revAcao = (db, callback) => {
           
            const collection = db.collection('acao')
            collection.remove(
                {_id: ObjectId(id)},
                redirect
            )
        }

        this._conn.exec(revAcao)
    }

}




module.exports = () => {
    return JogoDAO    
}