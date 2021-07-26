const { response } = require("express")

module.exports = class StaffDao {
    constructor(bd){
        this.bd = bd
    }

    VerStaff(){
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM STAFF'
            this.bd.all(query, (error, response)=>{
                if(error) reject(`Erro ao acessar o bd. ${error}`)
                else resolve(response)
            })
        })
    }

    VerUmStaff(id){
        return new Promise((resolve, reject)=>{
            const query = 'SELECT * FROM STAFF WHERE ID = ? '
            this.bd.all(query, id, (error,response)=>{
                if(error) reject(`Erro ao encontrar o ID ${id}.  ${error}`)
                else resolve(response)
            })
        })
    }

    NewStaff(infos){
        return new Promise((resolve, reject)=>{
            const query = 'INSERT INTO STAFF (NOME, CPF, IDADE, FUNCAO, EMAIL, RUA, NUMERO, CIDADE, ESTADO, TELEFONE) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
            const parametros = [infos[0], infos[1], infos[2], infos[3], infos[4], infos[5], infos[6], infos[7], infos[8], infos[9],]
            this.bd.run(query, parametros, (error, response)=>{
                if(error) reject(`Erro ao adicionar STAFF. ${error}`)
                else resolve('STAFF adicionado com sucesso')
            })
        })
    }

    DeleteStaff(id){
        return new Promise((resolve, reject) =>{
            const query = 'DELETE FROM STAFF WHERE ID = (?)'
            this.bd.run(query, id, (error, response)=>{
                if(error) reject(`Erro ao excluir STAFF. ${error}`) 
                else resolve("STAFF excluido")
            })
        })
    }

    EditStaff(infos, id){
        return new Promise((resolve,reject)=> {
            const query = 'UPDATE STAFF SET NOME = (?), CPF = (?), IDADE = (?), FUNCAO = (?), EMAIL = (?), RUA = (?), NUMERO = (?), CIDADE = (?), ESTADO = (?), TELEFONE = (?) WHERE ID = (?)'
            const parametros = [infos[0], infos[1], infos[2], infos[3], infos[4], infos[5], infos[6], infos[7], infos[8], infos[9], id]
            this.bd .run(query, parametros, (error, response)=>{
                if(error) reject(`Erro ao editar Staff. ${error}`) 
                else resolve("STAFF editado")
            })
        })
    }
        
}