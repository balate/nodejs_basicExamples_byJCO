"use strict";

//requerir express y router
var express = require('express');
var router = express.Router();

// /cargar módulo de autenficacion jsonwebtoken
var jwt = require('jsonwebtoken');




//Midelware que comprueba y verifica el token que nos da es valido
router.get( '/',function(req,res,next){

    //coger el token que nos da el usuario
    var token = req.body.token ||
                req.query.token ||
                req.headers['x-access-token'];

    if(token){

        jwt.verify(token,'clavedeservidorsupersecreta', function(err, decoded){

            if(err){
                return res.status(401).json({ok:false, error:'Token No valido'});
            }

            req.decoded= decoded;
            //el usuario esta autenticado y puede seguir la peticion por otros midldelware
            next();

        });
    }
    else{
        return res.status(401).json({ok:false,error: 'Token requerido'});
    }

});





//Autentication con Token
router.post('/authenticate', function(req,res){

    var user =req.body.user;
    var pass=req.body.pass;

    //buscar el usuario en la BD

    //....simulado

    var found = {_id:'123', name:'javi', password:'ds87ds87ds87'};

    //sino lo encontramos
    //return res.status(401).json({ok:false,error: 'Usuario no encontrado'})


    //encontrado
    if(found.password != pass){

        return res.status(401).json ({ok:false,error:'Contraseña no es correcta'});
    }
    // Crear token
    var token = jwt.sign(found, 'clavedeservidorsupersecreta', {

        expiresInMinutes: 60 * 24 * 2

    });
        //se lo devolvemos al usuario
        res.json({ok:true, toke:token})

});






//mensaje de pagina
router.get('/', function(req,res,next){

    console.log('decoded', req.decoded);

    res.send('Zona de Admin');

});



module.exports = router;