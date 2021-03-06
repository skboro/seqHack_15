require('../model/User')
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose'),
    User = mongoose.model('User');

/* POST users listing. */
router.post('/', function(req, res, next) {
  var db = mongoose.connect("mongodb://localhost:27017/causetolife", function(err) {
    console.log(req.body);
    User.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  var db = mongoose.connect("mongodb://localhost:27017/causetolife", function(err) {
    var users = User.find(function (err, users) {
      if(err)
        res.send('failure');
      else
       res.send(users);
    });
  });
});

/* GET /users/id */
router.get('/:id', function(req, res, next) {
  var db = mongoose.connect("mongodb://localhost:27017/causetolife", function(err) {
    User.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
});

/* PUT /users/:id */
router.put('/:id', function(req, res, next) {
  var db = mongoose.connect("mongodb://localhost:27017/causetolife", function(err) {
    User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
});

/* DELETE /users/:id */
router.delete('/:id', function(req, res, next) {
  var db = mongoose.connect("mongodb://localhost:27017/causetolife", function(err) {
    User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
});
module.exports = router;
