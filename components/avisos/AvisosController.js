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

router.get("/avisos/excluir/:id", async (req,res)=>{
  const id = Number(req.params.id)
  await avisos.excluir(id)
  res.redirect('/avisos')
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

router.post("/avisos/editar/:id", async (req,res) =>{
  const id = req.body.id
  const titulo = req.body.titulo
  const data = req.body.data
  const mensagem = req.body.mensagem
  
  await avisos.editar({titulo,data,mensagem}, id)

  if(msg.tipo === "Sucesso"){
    res.redirect('/avisos')
  }

  else{
    res.render('formulario_avisos', {msg})
  }
})

router.get("/avisos/editar/:id", async (req, res) =>{
  const id = req.params.id
  const Aviso = await avisos.selecionarAviso(id)
  res.render('formulario_avisos', {Aviso})
})
module.exports = router
