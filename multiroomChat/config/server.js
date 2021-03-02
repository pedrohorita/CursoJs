const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const exVal = require('express-validator')

const server = express()


server.set('view engine', 'ejs')
server.set('views', './app/views')

server.use(express.static('./app/public'))
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(express.static('./app/public'))
server.use(exVal())

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(server)

module.exports = server