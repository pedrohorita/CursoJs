class NoticiaDAO {
    constructor(conn) {
        this._conn = conn
    }

    getNoticias(callback) {
        const cmd = 'Select * From noticias Order By data_criacao desc'
        this._conn.query(cmd, callback)
    }

    getNoticia(id, callback) {
        const cmd = `Select * From noticias where id_noticia = ${id}`
        this._conn.query(cmd, callback)
    }

    getLastNews(count, callback) {
        const cmd = `Select * From noticias Order By data_criacao desc limit ${count}`
        this._conn.query(cmd, callback)
    }

    saveNoticia(body, callback) {
        const cmd = 'insert noticias set ?'
        this._conn.query(cmd, body, callback)
    }
}

module.exports = function() {
    return NoticiaDAO
}