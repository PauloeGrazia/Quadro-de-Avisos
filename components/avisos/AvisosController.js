const { Router } = require('express')
const { restart } = require('nodemon')
const avisos = require('./avisos')

const router = require('express').Router()

router.get("/",(req,res)=>{
    res.send("Pagina inicial")
})

router.get("/avisos", async (req,res)=>{
  const Avisos = await avisos.selecionarTodos()
  res.render('Avisos', {Avisos}) 
})

router.get("/avisos/novo",(req,res)=>{
    res.render('formulario_avisos')

})// Fim da Rota

router.post("/avisos/novo", async (req,res)=>{
    const titulo = req.body.titulo
    const data = req.body.data
    const mensagem = req.body.mensagem



    const msg = await avisos.salvar({titulo,data,mensagem})
    res.render('formulario_avisos',{msg})
    
})



module.exports = router
