var express = require('express');
var router = express.Router();
const transfersController = require('../controllers/transfers');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'coins.' });
});

router.post('/', transfersController.create);

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'coins. | Register' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'coins. | Login' });
});

module.exports = router;
