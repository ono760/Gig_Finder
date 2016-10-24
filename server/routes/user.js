"use strict";
var express = require('express');
var router = express.Router();
var pg = require("pg");
var knex = require("../../db/knex");
var bcrypt = require("bcrypt");

router.get('/', function(req, res, next) {
    knex("users").select().then(function(data) {
        res.json({ data });
    })
});

module.exports = router;
