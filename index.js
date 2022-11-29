const express = require('express');
const path = require('path');
const servidor = express();

servidor.use(express.static(path.join(__dirname, 'public')));


servidor.get('/produto', (req, res) => {
    return res.sendFile(__dirname + "/views/produto.html");
});

servidor.get('/carrinho', (req, res) => {
    return res.sendFile(__dirname + "/views/carrinho.html");
});

servidor.get('/', (req, res) => {
    return res.sendFile(__dirname + "/views/index.html");
});

servidor.listen(3001);