/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

//==== STAFF
const STAFF_SCHEMA = 
`CREATE TABLE IF NOT EXISTS "STAFF" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(255),
    "CPF" varchar(255),
    "IDADE" varchar(255),
    "FUNCAO" varchar(255),
    "EMAIL" varchar(255),
    "RUA" varchar(255),
    "NUMERO" varchar(255),
    "CIDADE" varchar(255),
    "ESTADO" varchar(255),
    "TELEFONE" varchar(255)
  );`;

//==== Inserindo dados no BD do Staff

  const ADD_STAFF_DATA = `
INSERT INTO STAFF (ID, NOME, CPF, IDADE, FUNCAO, EMAIL, RUA, NUMERO, CIDADE, ESTADO, TELEFONE )
VALUES 
(1, 'Tereza Luiza Assis','90663683300','30','Instrutora de Dança','terezaluizaassis@kantoferramentaria.com.br','Rua Bela Vista ','2359','Trindade','Goiás','(24) 7714-2033'),
(2, 'Severino Tiago Gonçalves','29066607017','18','Estagiário','everinotiagogoncalves@amordeconvite.com.br','Rua São Luiz ','3603','Santana','Amazonas','(64) 9641-0845'),
(3, 'Rayssa Emily Nicole Melo','26527338775','25','Atendente','rayssaemilynicolemelo@goldenhotel.com.br','Rua Bela Vista ','6195','Alvorada','Rondônia','(58) 3354-1813'),
(4, 'Daniela Josefa Duarte','59202531692','45','Instrutora de Musculação','danielajosefaduarte@construtoraplaneta.com.br','Rua São Luiz ','8637','São Leopoldo','São Paulo','(12) 4223-8343'),
(5,'Alexandre Ian Vieira','39775694493','58','Instrutor de Luta','alexandreianvieira@yahoo.se','Rua Doze ','8553','Recife','Tocantins','(30) 6369-1414')
`
function criaTabelaStaff() {
  db.run(STAFF_SCHEMA, (error)=> {
     if (error) console.log("Erro ao criar tabela de STAFF", error);
  });
}

function populaTabelaStaff() {
  db.run(ADD_STAFF_DATA, (error)=> {
     if (error) console.log("Erro ao popular tabela de STAFF", error);
  });
}

db.serialize( ()=> {
  criaTabelaStaff();
  populaTabelaStaff();
});

//==== Exemplo de como Inserir dados no BD do Staff

/*
[
	
	
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
]
*/