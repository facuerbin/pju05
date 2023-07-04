const express = require('express'); // Me traigo express
const path = require('path')
const app = express(); // Ejecutamos la función que traigo de express

// 1) npm init
// 2) npm install express
// 3) Crear app.js
// 4) node app.js

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola desde mi primer servidor con express');
});

app.get('/facu', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port,() => {
    console.log('Escuchando en el puerto ' + port);
});
