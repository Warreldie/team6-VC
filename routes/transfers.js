var express = require('express');
var router = express.Router();
const transfersController = require('../controllers/transfers');
var passport = require('../passport/passport');

// register
router.get('/', transfersController.getAll);

router.post('/create', passport.authenticate('jwt', {session: false}), transfersController.create);

router.get('/saldo', passport.authenticate('jwt', {session: false}), transfersController.calcSaldo);

module.exports = router;