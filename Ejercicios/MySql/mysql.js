"use strict";

//requerir el driver // require driver
var mysql = require('mysql');


//crear una conexion //Create connection db
var connection = mysql.createConnection({

    host: 'didimo.es',
    user: 'usuariocurso',
    password: 'us3r',
    database: 'cursonode'

}) ;


// Conectar con db // connection db
connection.connect();



//leer filas (QUERY) // Read rows
connection.query('SELECT *FROM agentes', function(err,rows,fields){
    if (err){
        throw err;
    }

    rows.forEach(function(row){
        console.log(row)
    });

    //console.log(fields); // show info driver database
});