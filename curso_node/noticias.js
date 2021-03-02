let http = require('http')

let server = http.createServer((req, res) => {
    let cat = req.url
    res.end(`${cat}: OK`)
})
server.listen(3003)