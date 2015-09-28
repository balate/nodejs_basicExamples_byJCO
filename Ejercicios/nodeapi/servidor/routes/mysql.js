"use strict";


// lib express
var express = require('express');
var router = express.Router();

var dbMySQL = require('../lib/dbMySQL');


router.get('/', function(req,res){
    db.query('select * from agentes ', function (err, rows){
        if(err){
            return next(err);
        }

        res.render('mysql', {title: 'Agentes',rows: rows});
    })
});


module.exports = router;