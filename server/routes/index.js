"use strict";
var express = require('express');
var router = express.Router();
var pg = require("pg");
var knex = require("../../db/knex");
var bcrypt = require("bcrypt");
var gig_posters = require('./gig_posters');
var gig_seekers = require('./gig_seekers');
var gigs = require('./gigs');
var signup = require('./signup');
var signin = require('./signin');
var logout = require('./logout');
var user = require('./user');

router.use('/gig_posters', gig_posters);
router.use('/gig_seekers', gig_seekers);
router.use('/gigs', gigs);
router.use('/logout', logout);
router.use('/signup', signup);
router.use('/signin', signin);
router.use('/user', user);

module.exports = router;
