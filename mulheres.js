const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
    nome:'Grazielly Sabino',
    imagem: 'https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg',
    minibio: 'Grazilindagrazilindagrazilinda'
    },
    {
    nome:'Grazielly Sabino',
    imagem: 'https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg',
    minibio: 'Grazilindagrazilindagrazilinda'
    },
    {
    nome:'Grazielly Sabino',
    imagem: 'https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg',
    minibio: 'Grazilindagrazilindagrazilinda'
    },

]

function mostraMulheres(request, response){
    response.json(mulheres)
}

function mostraPorta() {
console.log (" Servidor criado e rodando na porta ", porta)

}
app.use (router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)