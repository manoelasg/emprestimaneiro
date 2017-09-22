const express = require('express');
const ClienteSchema = require('../schemas/cliente');
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

let router = express.Router();

router.post('/',(req,res) => {
    console.log('POST /clientes');

    let cliente = new ClienteSchema(req.body);

    cliente.senha = passwordHash.generate(req.body.senha);

    console.log(`Cliente cadastrado: ${cliente}`);

    cliente.save((error, resultado) => {
        if(error){
            res.status(400).send(error);
            console.log(`Erro - post /clientes : ${error}`);
            return;
        }
        res.status(201).send(resultado);
    });

});

router.post('/login',(req,res) => {
    console.log('POST /clientes/login');

    const emailLogin = req.body.email;

    console.log(`Email de Login = ${emailLogin}`);

    ClienteSchema.findOne({email: emailLogin}, (error, resultado) => {
        if(resultado && passwordHash.verify(req.body.senha,resultado.senha)){
            const token = jwt.sign({_id: resultado._id}, 'raiotokenizador');
            res.set('Authorization', token);
            res.send(resultado);
            return;
        }
        response.sendStatus(400);
    });
});

module.exports = router;
