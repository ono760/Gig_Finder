var express = require("express");
var app = express();
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var knex = require("./db/knex");
var bcrypt = require("bcrypt");

var server = require("http").createServer(app);
var io = require("socket.io")(server);
app.io = io;
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(favicon(path.join(__dirname, "/public/images/favicomatic/favicon.ico")));
app.use("/bower_components", express.static(path.join(__dirname, "/bower_components")));
app.use("/public/javascripts/controllers", express.static(path.join(__dirname, "public/javascripts/controllers")));

app.use(express.static(path.join(__dirname, "public")));

var routes = require("./server/routes");

app.use("/", routes);

var numUsers = 0;

app.get("/", function(req, res) {
	res.send("hello");
});

io.on("connection", function(socket) {
	var addedUser = false;
	socket.on("new message", function(data) {
		socket.broadcast.emit("new message", {
			username: socket.username,
			message: data
		});
	});
	socket.on("add user", function(username) {
		if (addedUser) return;
		socket.username = username;
		++numUsers;
		addedUser = true;
		socket.emit("login", {
			numUsers: numUsers
		});

		socket.broadcast.emit("user joined", {
			username: socket.username,
			numUsers: numUsers
		});
	});
	socket.on("typing", function() {
		socket.broadcast.emit("typing", {
			username: socket.username
		});
	});
	socket.on("stop typing", function() {
		socket.broadcast.emit("stop typing", {
			username: socket.username
		});
	});
	socket.on("disconnect", function() {
		if (addedUser) {
			--numUsers;
			socket.broadcast.emit("user left", {
				username: socket.username,
				numUsers: numUsers
			});
		};
	});
});

module.exports = app;
