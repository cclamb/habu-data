var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/style', function(req, res) {
  res.sendfile('public/stylesheets/style.css');
});

module.exports = router;
