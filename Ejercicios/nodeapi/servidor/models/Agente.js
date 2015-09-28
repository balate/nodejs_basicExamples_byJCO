"use strict";

var mongoose =require('mongoose');


//definir esquema de agente
var agenteSchema = mongoose.Schema({

   name:String,
   age: Number

});


//definir método estatico lista
agenteSchema.statics.lista= function(criterios, callback){

    //hosting de Agente
    //uso el .find sin callback para que me de una query sin ejecutar
    var query = Agente.find(criterios);

    //query ordena por nombre
    query.sort('name');

    //callback
    query.exec(function(err,rows){

        if(err){

           return callback(err);
       }

        return callback(null,rows);
    });
};


//metodo de instancia
agenteSchema.methods.get= function(idAgente,callback){

    console.log(this);
    return callback(null,this);

};



//Creo el módelo (refernciando un esquema con una colección)
// Vinculo con la colección Agente de la bd a una variable Agente
var Agente =mongoose.model('Agente', agenteSchema);

//exportar
module.export =Agente;