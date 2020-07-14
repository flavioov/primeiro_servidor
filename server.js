//iniciando modulos node.js - npm
const express = require('express')
const nunjucks = require('nunjucks')

// variável que vai renderizar as páginas
const server = express()


server.use(express.static("public"))

// a engine vai ver os aquivos *.njk
server.set("view engine", "njk")

nunjucks.configure("views",{
    express: server,
    autoescape: false,
    noCache: true
})

// === ROTAS ===
// sao os endereços '/' nas urls
server.get("/", function (req, res) {

    //infos to be invoket at the page file
    const about = {
        title: "RocketSeat",
        link: "https://rocketseat.com.br",
        description:"A Rocketseat é uma plataforma de ensino focada em programação na modalidade Front-End." +
            "Ensina sobre as tecnologias mais quentes do mercado utilizadas por empresas " +
            "como Netflix, Nubank, Uber e Airbnb."
    }

return res.render("about", {about: about})
});


server.listen(5000, function () {
    console.log("Server is runing !!")
})


// server.use(function (req, res) {
//     res.status(404).render("not_found");
// });