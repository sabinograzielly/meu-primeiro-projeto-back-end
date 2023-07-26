const mogoose = require('mongoose')
require('dotenv').config()

async function conectaBancoDeDados(){
   try {
    console.log('Conexão com o Banco de Dados iniciou')
    
    await mogoose.connect(process.env.MONGO_URL)

    console.log('Conexão com o Banco de Dados feito com SUCESSO!!')
} catch(erro){
    console.log(erro)
}
   }

   module.exports = conectaBancoDeDados
