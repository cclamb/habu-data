var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res) {
  res.sendfile('index.html');
});

module.exports = router;
