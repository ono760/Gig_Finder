"use strict";
var express = require('express');
var router = express.Router();
var pg = require("pg");
var knex = require("../../db/knex");
var bcrypt = require("bcrypt");


//Gets data from db and displays Gig seekers profiles in the gig poster page. 
router.get('/', function(req, res, next) {
    knex("gig_seekers").select().then(function(data) {
        res.json({ data });
    })
});

router.post('/post', function(req, res) {

    knex('gig_seekers').insert({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone_number: req.body.phone_number,
        email: req.body.email,
        location: req.body.location,
        summary_skills: req.body.summary_skills,
        languages: req.body.languages

    }).then(function() {
        res.redirect('/#gigseekers');
    });
});


module.exports = router;
