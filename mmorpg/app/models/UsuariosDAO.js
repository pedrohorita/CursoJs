const crypto = require('crypto')

class UsuariosDAO {
    constructor(conn) {
        this._conn = conn
    }
    inserirUsuario(usuario) {

        const encPass = crypto.createHash('md5').update(usuario.senha).digest('hex')
        usuario.senha = encPass
        const insert = (db, callback) => {
            const collection = db.collection('usuarios')
            collection.insert(usuario)
        }

        this._conn.exec(insert)
    }
    authUsuario(usuario, req, res) {
        // const query = {
        //     usuario: {
        //         $eq: usuario.usuario
        //     },
        //     senha: {
        //         $eq: usuario.senha
        //     }
        // }
        // OR
        // const query = {
        //     usuario:  usuario.usuario,
        //     senha: usuario.senha
        // }
        
        const desPass = usuario.senha
        const encPass = crypto.createHash('md5').update(desPass).digest('hex')
        usuario.senha = encPass
        
        const createSession = (err, result) => {
            if(result[0] != undefined) {
                req.session.authorized = true;
                req.session.user = result[0].usuario
                req.session.casa = result[0].casa
            }

            if(req.session.authorized) {
                res.redirect('jogo')
            }
            else 
            {
                usuario.senha = desPass
                res.render('index', {
                    validacao: [{
                        param: 'usuario', 
                        msg: 'Usuário ou senha incorretos'
                    }], 
                    dForm: usuario})
            }
        }

        const auth = (db, callback) => {
            const collection = db.collection('usuarios')
            
            collection.find(usuario).toArray(createSession)
        }
        this._conn.exec(auth)
    }
    
}




module.exports = () => {
    return UsuariosDAO    
}