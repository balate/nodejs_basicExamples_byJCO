var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
console.log(__dirname);


app.use(function(req,res,next){

  console.log('Nos llama: ', req.headers.host);
  //pedir a express un dato de una cabecera (headers)
  console.log(req.get('User-Agent'));
  if(esAndroid) {
    var esAndroid = req.get('User-Agent').match(/Anroid/i);
  }
  req.Android=esAndroid;
  next();
});


var dbMySQL = require('./lib/dbMySQL');

//añado conexion
var dbMongo = require('./lib/dbMongo'); //no es necesario asignarlo a nada

//añadir modelo
require('./models/Agente'); //no es necesario asignarlo a nada


app.use('/', require('./routes/index'));
app.use('/users',require('./routes/users'));
app.use('/mysql', require('./routes/mysql'));

//añadir controlador
app.use('/agentes', require('./routes/agentes'));

//API v1 Agentes Mongoose
app.use('/apiv1/agentes',require('./routes/apiv1/agentes'));

//API v2


//Añadir dependencies
app.use('/dependencies',require('./routes/dependencies'));

// Autentication co basic Auth
app.use('/admin',require('./routes/admin'));
//Autentication con JSON token
app.use('/apiv1/admin2',require('./routes/apiv1/admin2'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
