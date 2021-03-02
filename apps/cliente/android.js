const http = require('http')
let data
http.get('http://localhost', res => {
    res.on('data', d => {
        data += ` ${d}`
    })

    res.on('end', () => {
        console.log(data)
    })
})