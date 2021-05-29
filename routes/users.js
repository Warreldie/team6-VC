var express = require('express');
var router = express.Router();
const authController = require('../controllers/auth');
const usersController = require('../controllers/users');

// register
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'coins. | Register' });
});

router.post('/register', authController.signup);

// login
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'coins. | Login' });
});

// router.post('/login', authController.signin);

router.post('/search', usersController.search);

module.exports = router;