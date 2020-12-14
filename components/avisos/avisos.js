    //Conexão com o Banco de Dados
    const db = require('../../knexfile.js')

    /**
     * Inserir um Aviso no Banco de Dados
     * @param {object} aviso O aviso deve estar no seguinte formato {titulo, data, mensagem} em String
     * @returns {object} Mensagem de sucesso ou de erro
     */

    function salvar(aviso){
    
      //insert (obj com os dados).into (nome da tabela)
      return db.insert(aviso).into('avisos').then(id =>{
      return {tipo: "Sucesso", corpo: "Dados Inseridos com Sucesso!"}     
    })

    .catch(erro=>{
      return { tipo: "Erro", corpo: "Erro: " + erro}
    })


    }//Fim do Salvar

    /**
     * Seleciona todos os avisos cadastrados
     * @returns {object} Objeto com todos os avisos cadastrados ou uma mensagem de erro
     */

    function selecionarTodos(){

      return db.select('*').from('avisos')
      .then(avisos =>{
        return avisos
      })

      .catch(erro =>{
        return { tipo: "erro", corpo: "Erro: " + erro}
      })
    
    }// Fim do Selecionar Todos

    /**
     * Alterar um aviso cadastrado
     * @param {object} aviso O aviso deve estar no seguinte formato
     * {titulo <string> ,data <string> ,mensagem <strig>}
     */
    function editar(aviso, id){
      return db('avisos').where('ID_avisos', id).update(aviso)
      
      .then( _ =>{
        return { tipo: "sucesso", corpo: "Aviso Alterado com Sucesso"}
      })

      .catch(erro =>{
        return { tipo: "erro", corpo: "Erro: " + erro}
      })

    }//fim do editar

    /**
     * Função que exclui um aviso do Banco de Dados
     * @param {int} id id do Aviso
     */
    function excluir(id){
      return db.del().from('avisos').where('ID_avisos',id)
    }

    /**
     * Seleciona um Aviso
     * @param {*} id Id do aviso que será selecionado
     * @returns {object} Objeto com o aviso selecionado
     */
      function selecionarAviso(id){
        return db.select('*').from('avisos').where('ID_avisos',id).first()
        .then(avisos => { return avisos })

        .catch(erro =>{
          return { tipo: "erro", corpo: "Erro: " + erro}
        })
      }


     // Fim do Selecionar Avisos

    module.exports = {salvar, selecionarTodos, selecionarAviso ,excluir, editar}

    
