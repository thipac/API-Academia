const StaffDao = require('../dao/staff-dao')

module.exports = (app, bd) =>{
    const DaoStaff = new StaffDao(bd)
    
    app.get('/academia/staff', async (req,res) => {
         
        try{
            const respostaVerStaff = await DaoStaff.VerStaff()
            res.send(respostaVerStaff)

         }catch(error){
             res.send(error)
         }
    }) 

    app.get('/academia/staff/:ID', async (req, resp)=>{
        try{

            const id = req.params.ID

            const respostaVerUmStaff = await DaoStaff.VerUmStaff(id)
            resp.send(respostaVerUmStaff)

        }catch(error){
            resp.send(error)
        }
    })

    app.post('/academia/staff/newStaff', async (req, res)=>{
        try{
            const body = req.body
            const infos = [body.NOME, body.CPF, body.IDADE, body.FUNCAO, body.EMAIL, body.RUA, body.NUMERO ,body.CIDADE, body.ESTADO, body.TELEFONE]
            const respostaNewStaff = await 
            DaoStaff.NewStaff(infos)
            res.send(respostaNewStaff)
        }catch(error){
            res.send(error)
        }
    })

    app.delete('/academia/staff/delete/:ID', async (req, res)=>{
        try{
            const id =req.params.ID
            const respostaDeleteStaff = await DaoStaff.DeleteStaff(id)
            res.send(respostaDeleteStaff)
        }catch(error){
            res.send(error)
        }
    })

    app.put('/academia/staff/edit/:ID', async(req, res)=>{
        try{
            const id = req.params.ID
            const body = req.body
            const infos = [body.NOME, body.CPF, body.IDADE, body.FUNCAO, body.EMAIL, body.RUA, body.NUMERO ,body.CIDADE, body.ESTADO, body.TELEFONE]
            const respostaEditStaff = await 
            DaoStaff.EditStaff(infos, id)
            
            res.send(respostaEditStaff)

        }catch(error){
            res.send(error)
        }
    })
}