var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Supermercado JA',
    nomes: ['Maria', 'José', 'Elias']
  });
});

module.exports = router;
