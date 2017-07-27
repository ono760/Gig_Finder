(function() {
  'use strict';
  var express = require("express");
  var router = express.Router();
  var pg = require("pg");
  var knex = require("../../db/knex");
  var bcrypt = require("bcrypt");
  const USERS = function() {
    return knex('users');
  };
  router.post('/post', function(req, res) {
    USERS().where({
      username: req.body.username
    }).first().then(function(user) {
      if (!user) {
        var hash = bcrypt.hashSync(req.body.password, 8);
        knex('users').insert({
          username: req.body.username,
          password: hash,
          email: req.body.email,
          zip: req.body.zip
        }).then(function() {
          res.redirect('/#login');
        });
      } else {
        res.status(409).send();
      }
    });
  });
  module.exports = router;
}());