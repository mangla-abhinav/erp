var express = require('express');
var router = express.Router();
var db = require('../db/db');
const { v4: uuidv4 } = require('uuid');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(db.query(''));
});

router.post('/', function (req, res, next) {
  console.log(req.body);
  res.send(db.query(''));
});

module.exports = router;
