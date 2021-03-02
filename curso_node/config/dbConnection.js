const mysql = require('mysql')

 const conn = () => {
    const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
    })
    return conn
}

module.exports = () => conn