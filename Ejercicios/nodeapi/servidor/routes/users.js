var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

res.send('respond with a resource');
});


//recibiendo parametros
router.get('/:id', function(req, res, next) {

  console.log('params: ' ,req.params);
  console.log(req.query);

  var coches =req.params.id;
  var edad = req.query.edad;

  res.send('respond with a resource');
});



//peticion post con el body
router.post('/:id', function(req,res){
  "use strict";

  console.log('body:', req.body);
  res.send('cogido el body');

});




module.exports = router;