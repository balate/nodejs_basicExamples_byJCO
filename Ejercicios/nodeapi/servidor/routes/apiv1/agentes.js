
"use strict";

//requerir express y router
var express = require('express');
var router = express.Router();

//requerir modelo y mongoose
var mongoose = require('mongoose');
var Agente = mongoose.model('Agente');//alerntativa 1
//var Agente =  require('../models/Agente');//alerntativa 2


router.get('/',function(req,res){

    Agente.lista({},function(err,lista){
       if(err){

           console.log(err);
           return res.json({ok:false, error:err});
       }

        res.json({ok:true, data:lista});
    });

});


router.get('/:id',function(req,res){

    var id = req.params.id;

    //crear instancia del agente
    var agente= new Agente({name:"Instancia", age:23});

    agente.get(id, function (err,data){
        if(err){

            console.log(err);
            return res.json({ok:false, error:err});

        }
       res.json({ok:true, data:data});
    });

});




//Crear un agente
// POST /apiv1/agentes
router.post('/', function(req, res, next) {

    var nuevo = req.body;

    //Crear un registro de Agente (Nota en mongoose se trabaja con el objeto)
    var agente= new Agente(nuevo); //{name:"Cris",age:25});

    //crear un registro de agentes
    agente.save(function(err, creado){

        if(err){

            console.log(err);
            return res.json({ok:false, error:err});

        }

        //devolver una confirmación
        res.json({ok:true, agente:creado});
    });

});

module.exports = router;