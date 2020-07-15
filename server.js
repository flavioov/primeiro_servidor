//iniciando modulos node.js - npm
const express = require('express')
const nunjucks = require('nunjucks')

// variável que vai renderizar as páginas
const server = express()

//utilizar a pasta public
server.use(express.static("public"))

// a engine vai ver os aquivos *.njk
server.set("view engine", "njk")

nunjucks.configure("views",{
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function (req, res) {
    const  about = {
        avatar_url:"/not_enough_space.jpg",
        role: "Meme engraçado hahaha.",
        description: "Meu nome é Flávio de Oliveira, tenho 24 anos e sou formado em Biotecnologia na Unb (1/2015 - 2/2019). "
            + "Sempre gostei de tentar entender como eletrônicos funcionam. Mesmo que isto me fizesse queimar "
            + "o meu PS1-que-ganhei-faz-uns-20-minutos. Apesar de gostar de tecnologia, cursei Biotecnologia porque "
            + "queria ser pesquisador na área de envelhecimento e tentar viver até os 500 anos de idade. Porém, "
            + "com os cortes nas pesquisas pelo atual governo Bolsonario e o estado da ciência no Brasil, percebi que "
            + "não valia a pena viver de bolsa de estagiário pelos próximos 10 a 15 anos e decidi por migrar para a "
            + "área de TI. Pretendia cursar ciência da computação (cic), mas levaria muito tempo e preciso me "
            + "capacitar o quanto antes para o mercado de trabalho. Assim sendo, decidi cursar Análise e "
            + "desenvolvimento de sistemas - tecnólogo com 2 anos de duração.",
        links: [
            { name: "GitHub", url: "https://github.com/flavioov", target:"_blank"},
            { name: "Email", url: "mailto:oliveira.v653@gmail.com", target: ""},
            { name: "Telefone", url: "tel:+5561995552480", target: ""},
            { name: "Videos", url: "/videos", target:""}
        ]
    }
    return res.render("about", { about: about })
});

server.listen(4444, function () {
    console.log("Server is runing !!")
})


// server.use(function (req, res) {
//     res.status(404).render("not_found");
// });