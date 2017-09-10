var express = require('express');
var app = module.exports = express();
var http = require('http');
var path = require('path');
const moment = require('moment');

var port = process.env.PORT || 3100;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.get('/',function (req,res) {
  res.render('index', { title: 'Unix Time Stamp' })
})

app.get('/:date_string', function(req,res) {
  var time_stamp = moment(req.params.date_string, "MMMM DD, YYYY", true);
  var unix_time = time_stamp.format();
  console.log(unix_time);
  console.log(unix_time);
  if (time_stamp.isValid()) {
    res.json({
      'natural time': req.params.date_string,
      unix: unix_time
    });
  } else {
    res.json({
    unix: null,
    'error': 'Text must be in MMMM DD YYYY format'
      });
  }

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

// module.exports = app;
