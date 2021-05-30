var express = require('express');
var router = express.Router();
const transfersController = require('../controllers/transfers');
var passport = require('../passport/passport');

// register
router.get('/', function(req, res, next) {
  res.render('index', { title: 'coins. | Register' });
});

router.post('/create', passport.authenticate('jwt', {session: false}), transfersController.create);

router.get('/saldo', passport.authenticate('jwt', {session: false}), transfersController.calcSaldo);

module.exports = router;