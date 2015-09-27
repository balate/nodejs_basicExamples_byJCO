"use strict";


var express = require('express');
var router = express.Router();

var readDependencies = require('../lib/readDependencies');

router.get('/',function(req,res,next) {
    readDependencies(function(err, data){

        if(err){
            console.log(err);
            next(err);
            return;
        }
        console.log(err,data);
       res.render('dependencies', {data:data})
    });
});


module.exports = router;