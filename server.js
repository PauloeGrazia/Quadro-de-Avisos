//importando o express
const express = require('express')
const bodyParser = require('body-parser')

//ligando o express
const app = express()

//configurar a view engine
app.set('view engine','ejs')

// configurar a pasta public
app.use(express.static('public'))

// configurar o body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//rotas
app.get("/",(req,res)=>{
   res.send("GOL DO RIBAMAR")

})

//porta
app.listen(3000)