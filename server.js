//importando o express
const express = require('express')
const bodyParser = require('body-parser')
const moment = require('moment')

//importando as rotas do aviso
const routerAvisos = require('./components/avisos/AvisosController')

//ligando o express
const app = express()

//configurar a view engine
app.set('view engine','ejs')

// configurar a pasta public
app.use(express.static('public'))

moment.locale("pt-br")
app.locals.moment = moment

// configurar o body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//rotas
app.use(routerAvisos)

//porta
app.listen(3000)
