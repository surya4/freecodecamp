const express = require('express');
var app = express();
var http = require('http');
var net = require('net');
var path = require('path');

var port = process.env.PORT || 3100;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/',function (req,res) {
  res.render('index', { title: 'Unix Time Stamp' })
});

app.get('/api/whoami',function (req,res) {
  res.json({
    "ipaddress": req.headers['x-forwarded-for'] ||
       req.connection.remoteAddress ||
       req.socket.remoteAddress ||
       req.connection.socket.remoteAddress,
    "language": req.headers["accept-language"].split(",")[0],
     "software": req.headers['user-agent']
  })
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

http.createServer(app).listen(port, function(){
  console.log('Unix Time Stamp is running on port ' + port);
});
