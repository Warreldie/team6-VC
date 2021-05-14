var express = require('express');
var router = express.Router();
const authController = require('../controllers/api/auth');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', authController.signup);

module.exports = router;
