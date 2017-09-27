const express = require('express');
const router = express.Router();
const fs = require('fs');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser')
router.use(bodyParser.json());
/* GET home page. */



router.get('/', function (req, res) {
  res.render('/');
});

router.get('/add', function (req, res) {
  res.render('add');
});

router.get('/edit', function (req, res) {
  res.render('edit');
});
//router.get('/', function (req, res, next) {

/**
   * Define a callback function to render the
 * homepage once the topics data has been loaded
 */

router.get('/topics', (req, res, next) => {
  const mongoConnection = 'mongodb://localhost:27017/profile';

  MongoClient.connect(mongoConnection, (err, db) => {
    const cursor = db.collection('topics').find({});
    cursor.toArray((error, topics) => {
      db.close();
      res.json(topics);
    });
  });
});

module.exports = router;
