"use strict";

//requerir express y router
var express = require('express');
var router = express.Router();
//cargar módulo de autenficacion
var basicAuth = require('basic-auth');



//autenticacion con BASIC Authentication
router.use( function(req,res,next){

    //cargar el usario de la cabecera
    var user= basicAuth(req);

    //comprobamos si existe el usuario
    if(!user || user.name !== 'admin' || user.pass !== 'admin'){
        //sino existe, devolver error
        //poner cabecera a la respuesta
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');

        res.send(401);

        return;
    }
    // si existe, que siga con su next
    next();
});




//mensaje de pagina
router.get('/', function(req,res,next){
    res.send('Zona de Admin');

});



module.exports = router;