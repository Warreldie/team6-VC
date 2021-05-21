var express = require('express');
var router = express.Router();
const transfersController = require('../controllers/transfers');

// register
router.get('/', function(req, res, next) {
  res.render('index', { title: 'coins. | Register' });
});

router.post('/create', transfersController.create);

module.exports = router;