"use strict";
var express = require('express');
var router = express.Router();
var pg = require("pg");
var knex = require("../../db/knex");
var bcrypt = require("bcrypt");

const GIGS = function() {
    return knex('gigs');
};

router.get('/', function(req, res, next) {
    knex("gig_posters").select().then(function(data) {
        res.json({ data });
    })
});

router.post('/post', function(req, res) {
    knex('gigs').insert({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gig_location: req.body.gig_location,
        gig_amount: req.body.gig_amount,
        gig_reply_email: req.body.gig_reply_email,
        gig_description: req.body.gig_description,
        gig_lang_accepted: req.body.gig_lang_accepted

    }).then(function() {
        res.redirect('/#gigposters');
    });
});

module.exports = router;
