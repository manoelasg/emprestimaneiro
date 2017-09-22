const express = require('express');
const ClienteSchema = require('../schemas/cliente');
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

let router = express.Router();

// const validaToken = expressJwt({secret: 'chuvinhadebolo'});

module.exports = router;
