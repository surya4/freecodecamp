const express = require('express');
var router = express.Router();
var db = require('../config/db');


router.get('/',function (req,res) {
  res.render('index', { title: 'URL Shortner' })
});

module.exports = router;
