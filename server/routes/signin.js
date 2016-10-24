"use strict";
var express = require("express");
var router = express.Router();
var pg = require("pg");
var knex = require("../../db/knex");
var bcrypt = require("bcrypt");

const USERS = function() {
    return knex('users');
};

router.use(function(req, res, next) {
    res.locals.err = null;
    next();
});

router.post('/post', function(req, res) {
    knex('users').where({ username: req.body.username }).first().then(function(user) {
        if (user && bcrypt.compareSync(req.body.password, user.password)) {
            var user = {
                displayName: user.username,
                id: user.id
            };
            res.redirect('/user')

        } else {
            res.redirect('/signup');

        };
    });
});


module.exports = router;
