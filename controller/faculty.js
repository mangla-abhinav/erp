var express = require('express');
var router = express.Router();
var db = require('../db/db');
const { v4: uuidv4 } = require('uuid');

/* GET users listing. */
router.get('/', function (req, res, next) {
  db.query('SELECT * FROM faculty').then((data) => {
    console.log(data);
  });

  res.send('OK');
});

router.post('/', function (req, res, next) {
  const data = req.body;
  res.send(
    db.query(
      'INSERT INTO `faculty`(`id`,`name`,`contact`,`email`)VALUES("' +
        uuidv4() +
        '","' +
        data.name +
        '","' +
        data.contact +
        '","' +
        data.email +
        '")'
    )
  );
});

module.exports = router;
