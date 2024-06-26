// IMPORTAR DEPENDENCIA
const express = require('express');
const path = require('path')
const pages = require('./pages.js')

// INCIANDO O EXPRESS
const server = express()

server
    // UTILIZANDO OS ARQUIVOS ESTATICOS
    .use(express.static('assets'))

    // CONFIGURAR TEMPLATE ENGINE
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // ROTAS DA APLICAÇÃO
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)

// LIGAR O SERVIDOR
server.listen(5500)