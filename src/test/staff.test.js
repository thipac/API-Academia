const request = require('supertest')

describe('Teste de rotas', ()=>{
    test('/academia/staff', async ()=>{

    await request('http://localhost:3030')
    .get('/academia/staff')
    .expect(200)
    .then((res)=> console.log('Passou no teste'))
})

test('/academia/staff/newStaff', async ()=>{

    await request('http://localhost:3030')
    .get('/academia/staff/newStaff')
    .send(
        {
            "NOME": "Levi Rafael Mendes",
            "CPF": "15559176230",
            "IDADE": 27,
            "FUNCAO": "Faxineiro",
            "EMAIL": "levirafaelmendes-71@callan.com.br",
            "RUA": "Rua Mauro Cesar do Nascimento",
            "NUMERO": 382,
            "CIDADE": "Resende",
            "ESTADO": "Rio de Janeiro",
            "TELEFONE": "986178436",
        }
    )
    .expect(200)
    .then((res)=> console.log('Passou no teste'))
})


test('/academia/staff/edit/5', async ()=>{

    await request('http://localhost:3030')
    .put('/academia/staff/edit/5')
    .send(
        {
            "NOME": "Levi Mendes",
            "CPF": "15559176230",
            "IDADE": 56,
            "FUNCAO": "Faxineiro",
            "EMAIL": "levirafaelmendes-71@callan.com.br",
            "RUA": "Rua Mauro Cesar do Nascimento",
            "NUMERO": 382,
            "CIDADE": "Queluz",
            "ESTADO": "São Paulo",
            "TELEFONE": "986178436",
        }
    )
    .expect(200)
    .then((res)=> console.log('Passou no teste'))
})

test('/academia/staff/delete/5', async ()=>{

    await request('http://localhost:3030')
    .delete('/academia/staff/delete/5')
    .expect(200)
    .then((res)=> console.log('Passou no teste'))
})
})




