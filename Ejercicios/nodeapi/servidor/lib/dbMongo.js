"use strict";

//requerir de mongoose
var mongoose =require('mongoose');


//conexion
var db = mongoose.connection;

//handler de error de conexion
db.on('error', function(err){
   console.log(err);
   process.exit(1);

});


//handler de conexion
db.once('open', function(){

   console.log('conectados a mongo');

});


//conecatmos para que salten los evenentos

mongoose.connect('mongodb://localhost/agentes');