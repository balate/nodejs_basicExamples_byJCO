"use strict";

var express =require('express');

//crear una app de express
var app= express();

//le vamos a decir que escuche peticiones

app.get('/',function(resqu,respo){

    console.log('Esto es una peticion');

    //responder a las peticiones
    respo.send('Hola :)')
});


//escuchar (Listen)y callback con respuesta del server
var server = app.listen(3005, function(){
    var port =server.address().port;

    console.log('servidor arrancado '+ port);
});