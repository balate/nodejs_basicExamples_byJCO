"use strict";

//requerir driver //require driver
var mongoskin = require('mongoskin');

//crear cadena conexion //create conection db
var db = mongoskin.db('mongodb://localhost:27017/prueba');

//hacer una query a mongo // show data
db.collection('prueba').find().toArray(function(err,results){

    if(err){
        throw err;
    }

    console.log(results);
});
