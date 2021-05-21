var express = require('express');
var router = express.Router();
const transfersController = require('../controllers/transfers');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'coins.' });
});

router.post('/', transfersController.create);

module.exports = router;
