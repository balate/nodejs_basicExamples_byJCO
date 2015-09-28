"use strict";

//requerir express y router
var express = require('express');
var router = express.Router();

//requerir modelo y mongoose
var mongoose = require('mongoose');
var Agente = mongoose.model('Agente');//alerntativa 1
//var Agente =  require('../models/Agente');//alerntativa 2

/* GET users listing. */
router.get('/', function(req, res, next) {

    //Crear instacia de Agente (Nota en mongoose se trabaja con el objeto)
    var agente= new Agente({name:"Cris",age:25});

    //crear un registro de agentes
    agente.save(function(err, creado){
       if(err){
           console.log(err);
           return next(err);
       }

        console.log('Agente creado ', creado);
    });

    res.send('respond with a resource');
});

module.exports = router;