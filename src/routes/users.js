var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Does nodemon knows when to restart? Sure it does!');
});

module.exports = router;
