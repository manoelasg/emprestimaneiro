const express = require('express');
const handlebars = require('express-handlebars');
const session = require('express-session');
const mongoose = require('mongoose');
const request = require('request');
const bodyParser = require('body-parser');
const clientesController = require('./controllers/clientes');
const emprestimosController = require('./controllers/emprestimaneiros');

const app = express();

mongoose.connect('mongodb://localhost/emprestimaneiro');

app.use(bodyParser.json());
app.use('/clientes', clientesController);
app.use('/emprestimaneiro', emprestimosController);

app.get('/hello', (req,res) => {
    res.send('<div style="text-align:center;margin-top:100px;"><h1>Hello Emprestimaneiros!</h1></div>');
});

app.listen(3000, () => {
    console.log("Servidor inicializado");
})
