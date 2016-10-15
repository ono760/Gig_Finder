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



//posters can signup for an acount
// router.post('/signup', function(req, res, next) {
//     console.log(req.body);
//     res.json({ message: "signup here" })
// });

// //posters can login
// router.post('/login', function(req, res, next) {
//     res.json({ message: "login here" })
// });
// //posters can logout
// router.post('/logout', function(req, res, next) {
//     res.json({ message: "logout here" })
// });

// //posters can update an existing gig post
// router.put('/edit', function(req, res, next) {
//     console.log("update here");
//     res.json({ update: 'y' })
// });

// //posters can delete an existing gig post
// router.delete('/delete', function(req, res, next) {
//     console.log("delete here");

// })


module.exports = router;
