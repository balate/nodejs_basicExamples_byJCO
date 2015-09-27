"use strict";

//abrir fichero .json
var fs= require('fs');

function readDependencies (cb) {
    fs.readFile('./package.json', function (err, data) {

        if (err) {
           return cb(err);
        }

        try {

            //parsearlo
            var packageJson = JSON.parse(data);

        } catch (e){

            return cb(e);
        }

        //devolver las dependencias
        cb(null, Object.getOwnPropertyNames(packageJson.dependencies));

    });

}



module.exports =readDependencies;