var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'coins. | Register' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'coins. | Login' });
});

module.exports = router;
