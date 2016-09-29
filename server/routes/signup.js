"use strict";
var express = require("express");
var router = express.Router();
var pg = require("pg");
var knex = require("../../db/knex");
var bcrypt = require("bcrypt");

const USERS = function() {
    return knex('users');
};


// router.get('/', function(req, res, next) {
//     knex("users").select().then(function(data) {
//         res.json({ data });
//     })
// });


// router.post('/post', function(req, res) {
//     if (req.body.username.length < 4 || req.body.password.length < 4) {
//         res.status(400).send("Username and Password must be longer than 4 characters")
//     } else {
//         bcrypt.hash(req.body.password, 10, function(err, hashedPassword) {
//             knex('users').insert({
//                 username: req.body.username,
//                 password: hashedPassword,
//                 email: req.body.email,
//                 zip: req.body.zip
//             }).then(function() {
//                 res.redirect('/#login');
//             }).catch(function(err) {
//                 console.log("username already exists");
//                 res.redirect('/#signup');
//             })
//         })
//     }
// });

router.post('/post', function(req, res) {
    USERS().where({ username: req.body.username }).first().then(function(user) {
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
