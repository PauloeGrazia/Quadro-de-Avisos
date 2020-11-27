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
     * Função que exclui um aviso do Banco de Dados
     * @param {int} id id do Aviso
     */
    function excluir(id){
      return db.del().from('avisos').where('ID_avisos',id)
    }

    module.exports = {salvar, selecionarTodos, excluir}

    
