//Get the npm packages that I need
var express = require("express");
var path = require("path");

//Set up the express application 
var application = express();
var PORT = 3000;

//Set up the express application to handle data parsing
application.use(express.json());
application.use(express.urlencoded({extended: false}));