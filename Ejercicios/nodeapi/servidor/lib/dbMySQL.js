

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
connection.connect(function (err,data){

    if(err){
        console.log(err);
        process.exit(1);
        return;
    }
    console.log('conectado a my sql', data)
});

//compartir la conexion con los otros módulos
module.exports = connection;
