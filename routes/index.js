const express = require('express');
const router = express.Router();
const fs = require('fs');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser')
router.use(bodyParser.json());
const mongoConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/progressTracker';
/* GET home page. */

const Topic = require('../models/topic');



router.get('/', function (req, res) {
  res.render('index');
})

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
  mongoose.connect(mongoConnection);
  Topic.find({}, (error, topics) => {
    res.render('details', {
      topics: topics
    })
  });
});


module.exports = router;
